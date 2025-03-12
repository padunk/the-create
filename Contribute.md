# Contribution Guideline

If you want to add new framework or library, please follow these steps:

1. Add framework to `README.md` and `src/constants/index.js > HELP_MANUAL`
2. Update `type.js`, update the typedef definition for Framework.
3. Create new runner file based on the template inside `runner` folder.
   - Please remember to add `.js` when you importing!
4. Update `runner/index.js`
5. Update `index.js` file.
6. Test it in your local computer with `npm run link`
7. Commit and push.

## Thank you for your contribution!

### For Approval

1. Update `package.json` version, only update the patch version.
2. Update `CHANGELOG.md`
3. Update `Contributor.md`, add your name/username and any socmed link.
