export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
  public: string;
}

export type BuildMode = 'development' | 'production';

export interface BuildOptions {
  mode: BuildMode;
  port: number;
  paths: BuildPaths;
}
