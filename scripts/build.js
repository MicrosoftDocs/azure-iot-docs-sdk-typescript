"use strict";

var child_process = require('child_process');
var fs = require('fs');
var fse = require('fs-extra');
var glob = require('glob');
var path = require('path');
var yaml = require('js-yaml');

var src = 'src/azure-iot-sdk-node';
var packageMappingFileRelativePath = 'package_service_mapping.json';
var repoRelativePath = 'repo.json';
var dest = 'docs-ref-autogen';
var configPath = 'node2docfx.json';
var tempConfigPath = '_node2docfx_temp.json';
var filenameMaxLength = 100;
var packagesToFilter = ['azure-iot-amqp-base', 'azure-iot-http-base', 'azure-iot-device-ts-samples', 'registry_sample', 'ts-e2e'];


// 1. prepare
fse.removeSync(dest);
fse.mkdirpSync(dest);

var tsconfigs = glob.sync(path.join(src, '**/tsconfig.json'));
var toc = [];

tsconfigs.forEach(function (tsconfig) {
    var packagePath = tsconfig.replace('tsconfig.json', 'package.json');
    generatePackageDoc(packagePath, dest);
});

var transformedToc = [{name: 'Device', items:[]}, {name: 'Service', items:[]}, {name: 'Common', items:[]}];
toc.forEach(function(t) {
    if (t.name.indexOf('e2e') >= 0) {
        return;
    }
    if (t.name.indexOf('device') >= 0) {
        transformedToc[0].items.push(t);
    } else if (t.name.indexOf('common') >= 0 || t.name.indexOf('base') >= 0) {
        transformedToc[2].items.push(t);
    } else {
        transformedToc[1].items.push(t);
    }
});

transformedToc = JSON.parse(JSON.stringify(transformedToc));
fs.writeFileSync(dest + '/toc.yml', yaml.safeDump(transformedToc));
process.exit(0);

function generatePackageDoc(packagePath, dest) {
    var dir = path.dirname(packagePath);
    var packageName = fse.readJsonSync(packagePath).name;
    if (packagesToFilter.indexOf(packageName) < 0) {
        console.log(packageName);
        var sourceCodeBasePath = dir + '/src';
        if (fse.existsSync(sourceCodeBasePath)) {
            var packageDest = dest + '/' + packageName;
            fse.mkdirpSync(packageDest);
            child_process.execSync('typedoc --json ' + dir + '/api.json ' + dir + '/src --module commonjs --ignoreCompilerErrors');
            var basePath = sourceCodeBasePath.replace(src + '/', '');
            child_process.execFileSync('node', ['node_modules/type2docfx/dist/main', dir + '/api.json', packageDest, 'repo.json',
             '--disableAlphabetOrder', '--basePath', basePath]);
            var subToc = yaml.safeLoad(fs.readFileSync(packageDest + '/toc.yml'));
            toc.push(subToc[0]);
            fse.removeSync(packageDest + '/toc.yml');
        } else {
            console.log('No source file for ' + packageName);
        }
    }
}