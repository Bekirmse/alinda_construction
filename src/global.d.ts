declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";

declare var require: {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp
  ): {
    keys(): string[];
    <T>(id: string): T;
  };
};
