# Coding Styles
Fravega's codings styles

## Languages

### Java

**TODO**

### Scala

For Scala we use the [Scalastyle](http://www.scalastyle.org/) SBT plugin. Just add this line in your `build.sbt`:

```scala
scalastyleConfigUrl := Some(url("https://raw.githubusercontent.com/fravega/coding-styles/master/scalastyle-config.xml"))
```

To run scalastyle:
```
sbt scalastyle
```

### JS

Add ESLint script to run it in `package.json` and check the devDependencies:

```json
{
	"scripts": {
		"lint": "eslint ."
	},
	"devDependencies": {
		"eslint": "^2.0.0",
		"fravega-eslint-config": "latest"
	}
}
```

Add `.eslintrc` file and extend from this package

```json
{
    "extends": "fravega-eslint-config"
}
```

If you want **es6** and **react** configs
```json
{
    "extends": [ "fravega-eslint-config", "fravega-eslint-config/es6", "fravega-eslint-config/react", "fravega-eslint-config/mocha", "fravega-eslint-config/jasmine" ]
}
```

### Styles

Add StyleLint script to run it in `package.json` and check the devDependencies:

```json
{
	"scripts": {
		"lint": "stylelint ."
	},
	"devDependencies": {
		"stylelint": "^6.5.1",
		"fravega-stylelint-config": "latest"
	}
}
```

Add `.stylelintrc` file and extend from this package

```json
{
    "extends": "fravega-stylelint-config"
}
```

## Tools

### Git pre-commit hooks

[overcommit](
https://github.com/brigade/overcommit) is a fully configurable and extendable Git hook manager that includes out-of-the-box support for running multiple standard tools like: _checkstyle_ or _scalastyle_ as a Git pre-commit hook. Unlike regular Git hooks, this are stored in source control. 
