{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
    ...
  } @ inputs:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = nixpkgs.legacyPackages.${system};
                run-backend =
                  pkgs.writeShellScriptBin
                  "run-backend"
                  /*
                  bash
                  */
                  ''
                    set -e
                    set -o pipefail

                    echo "Starting backend"
                    (cd backend; npm i; npm run build; pm2 delete all; pm2 start dist/src/index.js --name backend -i 2)
                  '';
      in {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            bash
            nodejs_20
            pm2
            run-backend
          ];
        };
      }
    );
}