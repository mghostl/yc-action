const core = require('@actions/core');
const tc = require('@actions/tool-cache');

async function setup() {
    // Get version of tool to be installed
    const token = core.getInput('token');
    const cloudId = core.getInput('cloud-id');
    const folderId = core.getInput('folder-id');

    // Download the specific version of the tool, e.g. as a tarball
    const pathToTarball = await tc.downloadTool("https://storage.yandexcloud.net/yandexcloud-yc/install.sh");

    // Extract the tarball onto the runner
    const pathToCLI = await tc.extractTar(pathToTarball);

    // Expose the tool by adding it to the PATH
    core.addPath(pathToCLI)
}

module.exports = setup
