# The Create

## One create to rule them all

Remembering all create to create an app is sucks.

Install one create to run every create.

## Install

```bash
npm i -g @rustyrush/the-create
```

## Help

```bash
thecreate --help
```

## Usage

```bash
thecreate <directory/app/project name> --pm<package manager> --fw<framework/library>
```

## Example

Creating Vite based project with Bun

```bash
thecreate my-app --pm=bun --fw=vite
# OR
thecreate my-app --pm bun --fw=vite
# OR
thecreate my-app --pm bun --fw vite

# RustyRush creating your app...

cd my-app
# manually install dependencies
bun i
# open your code editor
vim .

```

## License

[MIT](https://github.com/padunk/the-create/blob/master/LICENSE)
