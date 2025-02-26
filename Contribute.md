# Contribution Guideline

If you want to add new framework or library, please follow these steps:

1. Add framework to `README.md` and `src/constants/index.js > HELP_MANUAL`
2. Update `package.json` version, only update the patch version.
3. Update `type.js`, update the typedef definition for Framework.
4. Create new runner file based on the template inside `runner` folder.
   - Please remember to add `.js` when you importing!
5. Update `runner/index.js`
6. Update `index.js` file.
7. Update `CHANGELOG.md`
8. Update `Contributor.md`, add your name/username and any socmed link.
9. Test it in your local computer with `npm run link`
10. Commit and push.

## Thank you for your contribution!
