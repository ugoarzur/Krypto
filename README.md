# Krypto

This is a repo based on the book "La grande histoire des codes secrets" - _"the great history of secret codes"_ written by Laurent Joffrin.

I am trying to replicates cipher functions in this repository in order to understand it and make a talk based on this work in the future.

## How to use it

Every cipher methods are subdivided in `modules/` directory.

For instance :
Caesar has a `README.md` file explaining more on details on the algorithm itself with some resources to dig. A `caesar.spec.ts` file to battle test the functions and a `caesar.ts` where lives the code.

```
modules
└── caesar
    ├── README.md
    ├── caesar.spec.ts
    └── caesar.ts
```

The `utils` folder is for _types_ and utility libraries.

You can clone the repos and

```bash
npm test       # to launch tests
npm test:w     # to launch tests in watch mode
npm test:cov   # to use the test coverage
```
