alias s:= setup

@setup:
    #!/bin/zsh
    source ~/.zshrc
    nvm install 18.17.0 && nvm use 18.17.0
    pnpm i
    pnpm hooks
    pnpm lint
    pnpm build

@clean:
    rm -rf coverage dist

@l:
  pnpm lint

@f:
  pnpm fomat

@h:
  pnpm hooks

@b:
  pnpm build

@sv:
  cd example && pnpm serve
