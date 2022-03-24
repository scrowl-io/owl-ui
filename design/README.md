## Creating a Design

- Open Adobe XD and create a [new file](./readme-assets/01-new-file.png)
- Add some `Text` to the canvas, select the text and add its color and character styles to the [document assets](./readme-assets/02-text-example.png).
- Save the file to the [Creative Cloud](./readme-assets/03-saving-to-cloud.png)
- Select the [publish as a library](./readme-assets/04-publish.png) button and click the publish button in the current file section
- Click the browse tab, then click the done button on the [Browse shared libraries](./readme-assets/05-lib-browser.png)
- Go to the `Files` tab of the Creative Cloud portal and select the [Your libraries](./readme-assets/06-your-libs.png) section
- You should see a card of your file, hover over the card and click the menu icon then select the [share](./readme-assets/07-your-cc-file.png) option. You should see a modal open and a link being generated. **COPY** that [link](./readme-assets/08-dsp-link.png).

## Using the Design

To use the design we need to import the design file from XD then create a Design System Package (DSP).

### Importing to VS Code

- Install the Adobe VS Code extension
- Open the extension `cmd + opt + x`. It may try to locate a DSP, just close the file explorer if it does
- Go to the `DSP settings`
- Change the Languages so that only SCSS is selected
- Paste the link into the `CC LIBRARY LINK` field and click import
- Click `Save`
- Click `Start Editing` then `Finish Editing`
- Use your terminal apply changes to the [Theme](../packages/theme/README.md) component: `yarn run presetup`

### Updating the DSP

- Go to the `DSP settings`
- Click the `Re-import` button of `CC LIBRARY LINK` field
- Click `Save`
- Click `Start Editing` then `Finish Editing`
- Use your terminal apply changes to the [Theme](../packages/theme/README.md) component `yarn run presetup`
