# [REDACTED] 1: Islands [![](http://cf.way2muchnoise.eu/long_1226660_downloads.svg)](https://www.curseforge.com/minecraft/modpacks/damodpack-1-islands)
<!-- use 'short_<id>_downloads' for rounded small version (125 -> 100)  --> 
A large "Survival Islands" kitchen sink pack designed with a little something for everyone

## Using this repository
- Do not commit *all* configs, only new/modified files
- Do not commit mod jars
- When updating the modlist, only commit `manifest.json` and `modlist.html` from the modpack export
  - Be sure you're using the latest modlist before overwriting the file!
  - Don't forget to export shaders!

## Committing Changes
0. Fetch and/or pull changes from repo before starting
1. Modify/add/remove files in local repo
2. Go to the source control tab, verify changes
3. Enter a descriptive commit message
4. Stage and commit all or select changes
5. <ins>Sync changes</ins> with the online repo

## Releasing an Update
1. Navigate to the [Releases](https://github.com/RoarkCats/damodpack-1-islands/releases) tab in the online repo
2. Click "Create a new release"
3. Create and attach a zip file with the latest `overrides` folder, `manifest.json`, and `modlist.html`
   - Name this along the lines of `Redacted_1.0.0`
4. Create a new tag for the release, this should be the version number (Ex `1.0.0`)
   - See semantic versioning (`Breaking.Feature.Fix`/`Major.Minor.Patch`)
   - Increment minor for mod changes and patch for config/quests (`Modpack.Mod.Config`)
5. Set release title (Ex `[Redacted] 1.0.0`)
6. Set release description with changelog, this should document all commits since last release
7. Check the "Set as pre-release" box if not ready for public
8. Click "Generate release notes" which will give you a link to compare the previous version with the new one
   - Use this to help you write a complete changelog for easy copying into the CurseForge release, see previous changelogs for reference
   - In order to view the [comparison](https://github.com/RoarkCats/damodpack-1-islands/compare/) before publishing the release, [change the new tag](https://github.com/user-attachments/assets/608c54a0-f9a4-4622-864b-f32cfe1593a4) in the comparison "compare" field to `main`
9. Publish release
10. Upload the zip file from Step 3 to CurseForge with the changelog from Step 8
    - Set the CurseForge changelog style format to Markdown to match GitHub!

## Initializing this repository with VSCode
1. Open VSCode, click source control ![source control 3 dots connected by lines](https://github.com/user-attachments/assets/460be682-14b6-4328-9e1f-a299009607ce)
 and install Git if its not installed
    - If installing git, restart VSCode after, login when cloning repo in next step and in console when committing
3. Ctrl+Shift+P, search and run `clone` (git), enter `damodpack-1-islands` for the repository
4. Choose a good location for the repository, when prompted make the current workspace the repository
