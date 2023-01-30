# basesNodeJS
This is a NodeJS application that allows to create multiplication tables from the console, receiving by parameters the base and the limit, as well as creating a file with the table data. 

How Use This App: 

In your terminal run `yarn or npm i` This will set up the dependencies.

Commands available: 

Examples: 

```node app.js -b 5 --lt 6 -l ```

<img width="328" alt="image" src="https://user-images.githubusercontent.com/75432596/215504879-eb5c003d-8df7-4ffc-a076-042104a1e833.png">
```

```node app.js -b 5 --lt 6```

<img width="385" alt="image" src="https://user-images.githubusercontent.com/75432596/215505292-e464a800-f191-40ba-99c3-5b72e8449058.png">



```
Options:
      --help         Show help                                         [boolean]
      --version      Show version number                               [boolean]
  -b, --base         Base of the multiplication table        [number] [required]
      --lt, --limit  Show the table in the console           [number] [required]
  -l, --list         Show the table in the console    [boolean] [default: false]
 ```
 

language: 

- NodeJs: v18.13.0

- dependencies: 
```
  "colors": "^1.4.0",
  "yargs": "^17.6.2"
 ```


