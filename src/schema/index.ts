import { SitePluginFieldsEnum } from "./SitePluginFieldsEnum";
export { SitePluginFieldsEnum };
import { SiteBuildMetadataFieldsEnum } from "./SiteBuildMetadataFieldsEnum";
export { SiteBuildMetadataFieldsEnum };
import { MdxFieldsEnum } from "./MdxFieldsEnum";
export { MdxFieldsEnum };
import { ImageSharpFieldsEnum } from "./ImageSharpFieldsEnum";
export { ImageSharpFieldsEnum };
import { SiteFieldsEnum } from "./SiteFieldsEnum";
export { SiteFieldsEnum };
import { SitePageFieldsEnum } from "./SitePageFieldsEnum";
export { SitePageFieldsEnum };
import { DirectoryFieldsEnum } from "./DirectoryFieldsEnum";
export { DirectoryFieldsEnum };
import { SortOrderEnum } from "./SortOrderEnum";
export { SortOrderEnum };
import { FileFieldsEnum } from "./FileFieldsEnum";
export { FileFieldsEnum };
import { HeadingsMdx } from "./HeadingsMdx";
export { HeadingsMdx };
import { ImageFit } from "./ImageFit";
export { ImageFit };
import { ImageCropFocus } from "./ImageCropFocus";
export { ImageCropFocus };
import { ImageFormat } from "./ImageFormat";
export { ImageFormat };
import { PotraceTurnPolicy } from "./PotraceTurnPolicy";
export { PotraceTurnPolicy };
export interface StringQueryOperatorInput {
  eq?: string | null;
  ne?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
  regex?: string | null;
  glob?: string | null;
}
export interface IntQueryOperatorInput {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}
export interface DateQueryOperatorInput {
  eq?: Date | null;
  ne?: Date | null;
  gt?: Date | null;
  gte?: Date | null;
  lt?: Date | null;
  lte?: Date | null;
  in?: (Date | null)[] | null;
  nin?: (Date | null)[] | null;
}
export type Date = string;
export interface FloatQueryOperatorInput {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
  in?: (number | null)[] | null;
  nin?: (number | null)[] | null;
}
export interface ImageSharpFilterInput {
  fixed?: ImageSharpFixedFilterInput | null;
  resolutions?: ImageSharpResolutionsFilterInput | null;
  fluid?: ImageSharpFluidFilterInput | null;
  sizes?: ImageSharpSizesFilterInput | null;
  original?: ImageSharpOriginalFilterInput | null;
  resize?: ImageSharpResizeFilterInput | null;
  id?: StringQueryOperatorInput | null;
  parent?: NodeFilterInput | null;
  children?: NodeFilterListInput | null;
  internal?: InternalFilterInput | null;
}
export interface ImageSharpFixedFilterInput {
  base64?: StringQueryOperatorInput | null;
  tracedSVG?: StringQueryOperatorInput | null;
  aspectRatio?: FloatQueryOperatorInput | null;
  width?: FloatQueryOperatorInput | null;
  height?: FloatQueryOperatorInput | null;
  src?: StringQueryOperatorInput | null;
  srcSet?: StringQueryOperatorInput | null;
  srcWebp?: StringQueryOperatorInput | null;
  srcSetWebp?: StringQueryOperatorInput | null;
  originalName?: StringQueryOperatorInput | null;
}
export interface ImageSharpResolutionsFilterInput {
  base64?: StringQueryOperatorInput | null;
  tracedSVG?: StringQueryOperatorInput | null;
  aspectRatio?: FloatQueryOperatorInput | null;
  width?: FloatQueryOperatorInput | null;
  height?: FloatQueryOperatorInput | null;
  src?: StringQueryOperatorInput | null;
  srcSet?: StringQueryOperatorInput | null;
  srcWebp?: StringQueryOperatorInput | null;
  srcSetWebp?: StringQueryOperatorInput | null;
  originalName?: StringQueryOperatorInput | null;
}
export interface ImageSharpFluidFilterInput {
  base64?: StringQueryOperatorInput | null;
  tracedSVG?: StringQueryOperatorInput | null;
  aspectRatio?: FloatQueryOperatorInput | null;
  src?: StringQueryOperatorInput | null;
  srcSet?: StringQueryOperatorInput | null;
  srcWebp?: StringQueryOperatorInput | null;
  srcSetWebp?: StringQueryOperatorInput | null;
  sizes?: StringQueryOperatorInput | null;
  originalImg?: StringQueryOperatorInput | null;
  originalName?: StringQueryOperatorInput | null;
  presentationWidth?: IntQueryOperatorInput | null;
  presentationHeight?: IntQueryOperatorInput | null;
}
export interface ImageSharpSizesFilterInput {
  base64?: StringQueryOperatorInput | null;
  tracedSVG?: StringQueryOperatorInput | null;
  aspectRatio?: FloatQueryOperatorInput | null;
  src?: StringQueryOperatorInput | null;
  srcSet?: StringQueryOperatorInput | null;
  srcWebp?: StringQueryOperatorInput | null;
  srcSetWebp?: StringQueryOperatorInput | null;
  sizes?: StringQueryOperatorInput | null;
  originalImg?: StringQueryOperatorInput | null;
  originalName?: StringQueryOperatorInput | null;
  presentationWidth?: IntQueryOperatorInput | null;
  presentationHeight?: IntQueryOperatorInput | null;
}
export interface ImageSharpOriginalFilterInput {
  width?: FloatQueryOperatorInput | null;
  height?: FloatQueryOperatorInput | null;
  src?: StringQueryOperatorInput | null;
}
export interface ImageSharpResizeFilterInput {
  src?: StringQueryOperatorInput | null;
  tracedSVG?: StringQueryOperatorInput | null;
  width?: IntQueryOperatorInput | null;
  height?: IntQueryOperatorInput | null;
  aspectRatio?: FloatQueryOperatorInput | null;
  originalName?: StringQueryOperatorInput | null;
}
export interface NodeFilterInput {
  id?: StringQueryOperatorInput | null;
  parent?: NodeFilterInput | null;
  children?: NodeFilterListInput | null;
  internal?: InternalFilterInput | null;
}
export interface NodeFilterListInput {
  elemMatch?: NodeFilterInput | null;
}
export interface InternalFilterInput {
  content?: StringQueryOperatorInput | null;
  contentDigest?: StringQueryOperatorInput | null;
  description?: StringQueryOperatorInput | null;
  fieldOwners?: StringQueryOperatorInput | null;
  ignoreType?: BooleanQueryOperatorInput | null;
  mediaType?: StringQueryOperatorInput | null;
  owner?: StringQueryOperatorInput | null;
  type?: StringQueryOperatorInput | null;
}
export interface BooleanQueryOperatorInput {
  eq?: boolean | null;
  ne?: boolean | null;
  in?: (boolean | null)[] | null;
  nin?: (boolean | null)[] | null;
}
export interface MdxFilterInput {
  rawBody?: StringQueryOperatorInput | null;
  fileAbsolutePath?: StringQueryOperatorInput | null;
  frontmatter?: MdxFrontmatterFilterInput | null;
  body?: StringQueryOperatorInput | null;
  excerpt?: StringQueryOperatorInput | null;
  headings?: MdxHeadingMdxFilterListInput | null;
  html?: StringQueryOperatorInput | null;
  mdxAST?: JSONQueryOperatorInput | null;
  tableOfContents?: JSONQueryOperatorInput | null;
  timeToRead?: IntQueryOperatorInput | null;
  wordCount?: MdxWordCountFilterInput | null;
  fields?: MdxFieldsFilterInput | null;
  id?: StringQueryOperatorInput | null;
  parent?: NodeFilterInput | null;
  children?: NodeFilterListInput | null;
  internal?: InternalFilterInput | null;
}
export interface MdxFrontmatterFilterInput {
  title?: StringQueryOperatorInput | null;
  slug?: StringQueryOperatorInput | null;
  date?: DateQueryOperatorInput | null;
  description?: StringQueryOperatorInput | null;
  categories?: StringQueryOperatorInput | null;
  keywords?: StringQueryOperatorInput | null;
  banner?: FileFilterInput | null;
}
export interface FileFilterInput {
  sourceInstanceName?: StringQueryOperatorInput | null;
  absolutePath?: StringQueryOperatorInput | null;
  relativePath?: StringQueryOperatorInput | null;
  extension?: StringQueryOperatorInput | null;
  size?: IntQueryOperatorInput | null;
  prettySize?: StringQueryOperatorInput | null;
  modifiedTime?: DateQueryOperatorInput | null;
  accessTime?: DateQueryOperatorInput | null;
  changeTime?: DateQueryOperatorInput | null;
  birthTime?: DateQueryOperatorInput | null;
  root?: StringQueryOperatorInput | null;
  dir?: StringQueryOperatorInput | null;
  base?: StringQueryOperatorInput | null;
  ext?: StringQueryOperatorInput | null;
  name?: StringQueryOperatorInput | null;
  relativeDirectory?: StringQueryOperatorInput | null;
  dev?: IntQueryOperatorInput | null;
  mode?: IntQueryOperatorInput | null;
  nlink?: IntQueryOperatorInput | null;
  uid?: IntQueryOperatorInput | null;
  gid?: IntQueryOperatorInput | null;
  rdev?: IntQueryOperatorInput | null;
  ino?: FloatQueryOperatorInput | null;
  atimeMs?: FloatQueryOperatorInput | null;
  mtimeMs?: FloatQueryOperatorInput | null;
  ctimeMs?: FloatQueryOperatorInput | null;
  atime?: DateQueryOperatorInput | null;
  mtime?: DateQueryOperatorInput | null;
  ctime?: DateQueryOperatorInput | null;
  birthtime?: DateQueryOperatorInput | null;
  birthtimeMs?: FloatQueryOperatorInput | null;
  blksize?: IntQueryOperatorInput | null;
  blocks?: IntQueryOperatorInput | null;
  publicURL?: StringQueryOperatorInput | null;
  childImageSharp?: ImageSharpFilterInput | null;
  id?: StringQueryOperatorInput | null;
  parent?: NodeFilterInput | null;
  children?: NodeFilterListInput | null;
  internal?: InternalFilterInput | null;
  childMdx?: MdxFilterInput | null;
}
export interface MdxHeadingMdxFilterListInput {
  elemMatch?: MdxHeadingMdxFilterInput | null;
}
export interface MdxHeadingMdxFilterInput {
  value?: StringQueryOperatorInput | null;
  depth?: IntQueryOperatorInput | null;
}
export interface JSONQueryOperatorInput {
  eq?: JSON | null;
  ne?: JSON | null;
  in?: (JSON | null)[] | null;
  nin?: (JSON | null)[] | null;
  regex?: JSON | null;
  glob?: JSON | null;
}
export type JSON = string;
export interface MdxWordCountFilterInput {
  paragraphs?: IntQueryOperatorInput | null;
  sentences?: IntQueryOperatorInput | null;
  words?: IntQueryOperatorInput | null;
}
export interface MdxFieldsFilterInput {
  id?: StringQueryOperatorInput | null;
  title?: StringQueryOperatorInput | null;
  description?: StringQueryOperatorInput | null;
  slug?: StringQueryOperatorInput | null;
  date?: DateQueryOperatorInput | null;
  categories?: StringQueryOperatorInput | null;
  keywords?: StringQueryOperatorInput | null;
}
export interface DuotoneGradient {
  highlight: string;
  shadow: string;
  opacity?: number | null;
}
export interface Potrace {
  turnPolicy?: PotraceTurnPolicy | null;
  turdSize?: number | null;
  alphaMax?: number | null;
  optCurve?: boolean | null;
  optTolerance?: number | null;
  threshold?: number | null;
  blackOnWhite?: boolean | null;
  color?: string | null;
  background?: string | null;
}
export interface FileSortInput {
  fields?: (FileFieldsEnum | null)[] | null;
  order?: (SortOrderEnum | null)[] | null;
}
export interface DirectoryFilterInput {
  sourceInstanceName?: StringQueryOperatorInput | null;
  absolutePath?: StringQueryOperatorInput | null;
  relativePath?: StringQueryOperatorInput | null;
  extension?: StringQueryOperatorInput | null;
  size?: IntQueryOperatorInput | null;
  prettySize?: StringQueryOperatorInput | null;
  modifiedTime?: DateQueryOperatorInput | null;
  accessTime?: DateQueryOperatorInput | null;
  changeTime?: DateQueryOperatorInput | null;
  birthTime?: DateQueryOperatorInput | null;
  root?: StringQueryOperatorInput | null;
  dir?: StringQueryOperatorInput | null;
  base?: StringQueryOperatorInput | null;
  ext?: StringQueryOperatorInput | null;
  name?: StringQueryOperatorInput | null;
  relativeDirectory?: StringQueryOperatorInput | null;
  dev?: IntQueryOperatorInput | null;
  mode?: IntQueryOperatorInput | null;
  nlink?: IntQueryOperatorInput | null;
  uid?: IntQueryOperatorInput | null;
  gid?: IntQueryOperatorInput | null;
  rdev?: IntQueryOperatorInput | null;
  ino?: FloatQueryOperatorInput | null;
  atimeMs?: FloatQueryOperatorInput | null;
  mtimeMs?: FloatQueryOperatorInput | null;
  ctimeMs?: FloatQueryOperatorInput | null;
  atime?: DateQueryOperatorInput | null;
  mtime?: DateQueryOperatorInput | null;
  ctime?: DateQueryOperatorInput | null;
  birthtime?: DateQueryOperatorInput | null;
  birthtimeMs?: FloatQueryOperatorInput | null;
  blksize?: IntQueryOperatorInput | null;
  blocks?: IntQueryOperatorInput | null;
  id?: StringQueryOperatorInput | null;
  parent?: NodeFilterInput | null;
  children?: NodeFilterListInput | null;
  internal?: InternalFilterInput | null;
}
export interface DirectorySortInput {
  fields?: (DirectoryFieldsEnum | null)[] | null;
  order?: (SortOrderEnum | null)[] | null;
}
export interface SitePageContextFilterInput {
  pagination?: SitePageContextPaginationFilterInput | null;
  categories?: StringQueryOperatorInput | null;
  id?: StringQueryOperatorInput | null;
  prev?: SitePageContextPrevFilterInput | null;
  next?: SitePageContextNextFilterInput | null;
  activeCategory?: StringQueryOperatorInput | null;
}
export interface SitePageContextPaginationFilterInput {
  page?: StringQueryOperatorInput | null;
  nextPagePath?: StringQueryOperatorInput | null;
  previousPagePath?: StringQueryOperatorInput | null;
  pageCount?: IntQueryOperatorInput | null;
  pathPrefix?: StringQueryOperatorInput | null;
}
export interface SitePageContextPrevFilterInput {
  id?: StringQueryOperatorInput | null;
  excerpt?: StringQueryOperatorInput | null;
  fields?: SitePageContextPrevFieldsFilterInput | null;
  body?: StringQueryOperatorInput | null;
}
export interface SitePageContextPrevFieldsFilterInput {
  title?: StringQueryOperatorInput | null;
  slug?: StringQueryOperatorInput | null;
  categories?: StringQueryOperatorInput | null;
}
export interface SitePageContextNextFilterInput {
  id?: StringQueryOperatorInput | null;
  excerpt?: StringQueryOperatorInput | null;
  fields?: SitePageContextNextFieldsFilterInput | null;
  body?: StringQueryOperatorInput | null;
}
export interface SitePageContextNextFieldsFilterInput {
  title?: StringQueryOperatorInput | null;
  slug?: StringQueryOperatorInput | null;
  categories?: StringQueryOperatorInput | null;
}
export interface SitePluginFilterInput {
  id?: StringQueryOperatorInput | null;
  parent?: NodeFilterInput | null;
  children?: NodeFilterListInput | null;
  internal?: InternalFilterInput | null;
  resolve?: StringQueryOperatorInput | null;
  name?: StringQueryOperatorInput | null;
  version?: StringQueryOperatorInput | null;
  pluginOptions?: SitePluginPluginOptionsFilterInput | null;
  nodeAPIs?: StringQueryOperatorInput | null;
  browserAPIs?: StringQueryOperatorInput | null;
  ssrAPIs?: StringQueryOperatorInput | null;
  pluginFilepath?: StringQueryOperatorInput | null;
  packageJson?: SitePluginPackageJsonFilterInput | null;
}
export interface SitePluginPluginOptionsFilterInput {
  isTSX?: BooleanQueryOperatorInput | null;
  allExtensions?: BooleanQueryOperatorInput | null;
  path?: StringQueryOperatorInput | null;
  name?: StringQueryOperatorInput | null;
  extensions?: StringQueryOperatorInput | null;
  gatsbyRemarkPlugins?: SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput | null;
  short_name?: StringQueryOperatorInput | null;
  start_url?: StringQueryOperatorInput | null;
  background_color?: StringQueryOperatorInput | null;
  theme_color?: StringQueryOperatorInput | null;
  display?: StringQueryOperatorInput | null;
  icon?: StringQueryOperatorInput | null;
  pathCheck?: BooleanQueryOperatorInput | null;
}
export interface SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput {
  elemMatch?: SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput | null;
}
export interface SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput {
  resolve?: StringQueryOperatorInput | null;
  options?: SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput | null;
}
export interface SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput {
  maxWidth?: IntQueryOperatorInput | null;
  pathPrefix?: StringQueryOperatorInput | null;
  wrapperStyle?: StringQueryOperatorInput | null;
  backgroundColor?: StringQueryOperatorInput | null;
  linkImagesToOriginal?: BooleanQueryOperatorInput | null;
  showCaptions?: BooleanQueryOperatorInput | null;
  markdownCaptions?: BooleanQueryOperatorInput | null;
  withWebp?: BooleanQueryOperatorInput | null;
  tracedSVG?: BooleanQueryOperatorInput | null;
  loading?: StringQueryOperatorInput | null;
  disableBgImageOnAlpha?: BooleanQueryOperatorInput | null;
  disableBgImage?: BooleanQueryOperatorInput | null;
  classPrefix?: StringQueryOperatorInput | null;
  inlineCodeMarker?: StringQueryOperatorInput | null;
}
export interface SitePluginPackageJsonFilterInput {
  name?: StringQueryOperatorInput | null;
  description?: StringQueryOperatorInput | null;
  version?: StringQueryOperatorInput | null;
  main?: StringQueryOperatorInput | null;
  author?: StringQueryOperatorInput | null;
  license?: StringQueryOperatorInput | null;
  dependencies?: SitePluginPackageJsonDependenciesFilterListInput | null;
  devDependencies?: SitePluginPackageJsonDevDependenciesFilterListInput | null;
  peerDependencies?: SitePluginPackageJsonPeerDependenciesFilterListInput | null;
  keywords?: StringQueryOperatorInput | null;
}
export interface SitePluginPackageJsonDependenciesFilterListInput {
  elemMatch?: SitePluginPackageJsonDependenciesFilterInput | null;
}
export interface SitePluginPackageJsonDependenciesFilterInput {
  name?: StringQueryOperatorInput | null;
  version?: StringQueryOperatorInput | null;
}
export interface SitePluginPackageJsonDevDependenciesFilterListInput {
  elemMatch?: SitePluginPackageJsonDevDependenciesFilterInput | null;
}
export interface SitePluginPackageJsonDevDependenciesFilterInput {
  name?: StringQueryOperatorInput | null;
  version?: StringQueryOperatorInput | null;
}
export interface SitePluginPackageJsonPeerDependenciesFilterListInput {
  elemMatch?: SitePluginPackageJsonPeerDependenciesFilterInput | null;
}
export interface SitePluginPackageJsonPeerDependenciesFilterInput {
  name?: StringQueryOperatorInput | null;
  version?: StringQueryOperatorInput | null;
}
export interface SitePageFilterInput {
  path?: StringQueryOperatorInput | null;
  component?: StringQueryOperatorInput | null;
  internalComponentName?: StringQueryOperatorInput | null;
  componentChunkName?: StringQueryOperatorInput | null;
  matchPath?: StringQueryOperatorInput | null;
  id?: StringQueryOperatorInput | null;
  parent?: NodeFilterInput | null;
  children?: NodeFilterListInput | null;
  internal?: InternalFilterInput | null;
  isCreatedByStatefulCreatePages?: BooleanQueryOperatorInput | null;
  context?: SitePageContextFilterInput | null;
  pluginCreator?: SitePluginFilterInput | null;
  pluginCreatorId?: StringQueryOperatorInput | null;
  componentPath?: StringQueryOperatorInput | null;
}
export interface SitePageSortInput {
  fields?: (SitePageFieldsEnum | null)[] | null;
  order?: (SortOrderEnum | null)[] | null;
}
export interface SiteSiteMetadataFilterInput {
  siteUrl?: StringQueryOperatorInput | null;
  author?: StringQueryOperatorInput | null;
  title?: StringQueryOperatorInput | null;
  description?: StringQueryOperatorInput | null;
  keywords?: StringQueryOperatorInput | null;
}
export interface SiteFilterInput {
  buildTime?: DateQueryOperatorInput | null;
  siteMetadata?: SiteSiteMetadataFilterInput | null;
  port?: IntQueryOperatorInput | null;
  host?: StringQueryOperatorInput | null;
  pathPrefix?: StringQueryOperatorInput | null;
  polyfill?: BooleanQueryOperatorInput | null;
  id?: StringQueryOperatorInput | null;
  parent?: NodeFilterInput | null;
  children?: NodeFilterListInput | null;
  internal?: InternalFilterInput | null;
}
export interface SiteSortInput {
  fields?: (SiteFieldsEnum | null)[] | null;
  order?: (SortOrderEnum | null)[] | null;
}
export interface ImageSharpSortInput {
  fields?: (ImageSharpFieldsEnum | null)[] | null;
  order?: (SortOrderEnum | null)[] | null;
}
export interface MdxSortInput {
  fields?: (MdxFieldsEnum | null)[] | null;
  order?: (SortOrderEnum | null)[] | null;
}
export interface SiteBuildMetadataFilterInput {
  id?: StringQueryOperatorInput | null;
  parent?: NodeFilterInput | null;
  children?: NodeFilterListInput | null;
  internal?: InternalFilterInput | null;
  buildTime?: DateQueryOperatorInput | null;
}
export interface SiteBuildMetadataSortInput {
  fields?: (SiteBuildMetadataFieldsEnum | null)[] | null;
  order?: (SortOrderEnum | null)[] | null;
}
export interface SitePluginSortInput {
  fields?: (SitePluginFieldsEnum | null)[] | null;
  order?: (SortOrderEnum | null)[] | null;
}