export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export enum BannerStyle {
  FullWidth = 'FULL_WIDTH',
  Normal = 'NORMAL',
}

export type BannerStyleQueryOperatorInput = {
  eq?: Maybe<BannerStyle>
  ne?: Maybe<BannerStyle>
  in?: Maybe<Array<Maybe<BannerStyle>>>
  nin?: Maybe<Array<Maybe<BannerStyle>>>
}

export type BlogPost = {
  id: Scalars['ID']
  globalBlogPostId: Scalars['ID']
  title: Scalars['String']
  body: Scalars['String']
  excerpt: Scalars['String']
  banner?: Maybe<File>
  bannerStyle?: Maybe<BannerStyle>
  externalLinks: ExternalLinks
  slug: Scalars['String']
  langKey: LangKey
  date: Scalars['Date']
  tags?: Maybe<Array<Scalars['String']>>
  category: Scalars['String']
  categorySlug: Scalars['String']
  tableOfContents: Scalars['JSON']
  description?: Maybe<Scalars['String']>
  keywords?: Maybe<Array<Scalars['String']>>
}

export type BlogPostExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>
}

export type BlogPostDateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type BlogPostTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>
}

export type BlogPostConnection = {
  __typename?: 'BlogPostConnection'
  totalCount: Scalars['Int']
  edges: Array<BlogPostEdge>
  nodes: Array<BlogPost>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<BlogPostGroupConnection>
}

export type BlogPostConnectionDistinctArgs = {
  field: BlogPostFieldsEnum
}

export type BlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: BlogPostFieldsEnum
}

export type BlogPostEdge = {
  __typename?: 'BlogPostEdge'
  next?: Maybe<BlogPost>
  node: BlogPost
  previous?: Maybe<BlogPost>
}

export enum BlogPostFieldsEnum {
  Id = 'id',
  GlobalBlogPostId = 'globalBlogPostId',
  Title = 'title',
  Body = 'body',
  Excerpt = 'excerpt',
  BannerSourceInstanceName = 'banner___sourceInstanceName',
  BannerAbsolutePath = 'banner___absolutePath',
  BannerRelativePath = 'banner___relativePath',
  BannerExtension = 'banner___extension',
  BannerSize = 'banner___size',
  BannerPrettySize = 'banner___prettySize',
  BannerModifiedTime = 'banner___modifiedTime',
  BannerAccessTime = 'banner___accessTime',
  BannerChangeTime = 'banner___changeTime',
  BannerBirthTime = 'banner___birthTime',
  BannerRoot = 'banner___root',
  BannerDir = 'banner___dir',
  BannerBase = 'banner___base',
  BannerExt = 'banner___ext',
  BannerName = 'banner___name',
  BannerRelativeDirectory = 'banner___relativeDirectory',
  BannerDev = 'banner___dev',
  BannerMode = 'banner___mode',
  BannerNlink = 'banner___nlink',
  BannerUid = 'banner___uid',
  BannerGid = 'banner___gid',
  BannerRdev = 'banner___rdev',
  BannerIno = 'banner___ino',
  BannerAtimeMs = 'banner___atimeMs',
  BannerMtimeMs = 'banner___mtimeMs',
  BannerCtimeMs = 'banner___ctimeMs',
  BannerAtime = 'banner___atime',
  BannerMtime = 'banner___mtime',
  BannerCtime = 'banner___ctime',
  BannerBirthtime = 'banner___birthtime',
  BannerBirthtimeMs = 'banner___birthtimeMs',
  BannerBlksize = 'banner___blksize',
  BannerBlocks = 'banner___blocks',
  BannerPublicUrl = 'banner___publicURL',
  BannerChildImageSharpFixedBase64 = 'banner___childImageSharp___fixed___base64',
  BannerChildImageSharpFixedTracedSvg = 'banner___childImageSharp___fixed___tracedSVG',
  BannerChildImageSharpFixedAspectRatio = 'banner___childImageSharp___fixed___aspectRatio',
  BannerChildImageSharpFixedWidth = 'banner___childImageSharp___fixed___width',
  BannerChildImageSharpFixedHeight = 'banner___childImageSharp___fixed___height',
  BannerChildImageSharpFixedSrc = 'banner___childImageSharp___fixed___src',
  BannerChildImageSharpFixedSrcSet = 'banner___childImageSharp___fixed___srcSet',
  BannerChildImageSharpFixedSrcWebp = 'banner___childImageSharp___fixed___srcWebp',
  BannerChildImageSharpFixedSrcSetWebp = 'banner___childImageSharp___fixed___srcSetWebp',
  BannerChildImageSharpFixedOriginalName = 'banner___childImageSharp___fixed___originalName',
  BannerChildImageSharpResolutionsBase64 = 'banner___childImageSharp___resolutions___base64',
  BannerChildImageSharpResolutionsTracedSvg = 'banner___childImageSharp___resolutions___tracedSVG',
  BannerChildImageSharpResolutionsAspectRatio = 'banner___childImageSharp___resolutions___aspectRatio',
  BannerChildImageSharpResolutionsWidth = 'banner___childImageSharp___resolutions___width',
  BannerChildImageSharpResolutionsHeight = 'banner___childImageSharp___resolutions___height',
  BannerChildImageSharpResolutionsSrc = 'banner___childImageSharp___resolutions___src',
  BannerChildImageSharpResolutionsSrcSet = 'banner___childImageSharp___resolutions___srcSet',
  BannerChildImageSharpResolutionsSrcWebp = 'banner___childImageSharp___resolutions___srcWebp',
  BannerChildImageSharpResolutionsSrcSetWebp = 'banner___childImageSharp___resolutions___srcSetWebp',
  BannerChildImageSharpResolutionsOriginalName = 'banner___childImageSharp___resolutions___originalName',
  BannerChildImageSharpFluidBase64 = 'banner___childImageSharp___fluid___base64',
  BannerChildImageSharpFluidTracedSvg = 'banner___childImageSharp___fluid___tracedSVG',
  BannerChildImageSharpFluidAspectRatio = 'banner___childImageSharp___fluid___aspectRatio',
  BannerChildImageSharpFluidSrc = 'banner___childImageSharp___fluid___src',
  BannerChildImageSharpFluidSrcSet = 'banner___childImageSharp___fluid___srcSet',
  BannerChildImageSharpFluidSrcWebp = 'banner___childImageSharp___fluid___srcWebp',
  BannerChildImageSharpFluidSrcSetWebp = 'banner___childImageSharp___fluid___srcSetWebp',
  BannerChildImageSharpFluidSizes = 'banner___childImageSharp___fluid___sizes',
  BannerChildImageSharpFluidOriginalImg = 'banner___childImageSharp___fluid___originalImg',
  BannerChildImageSharpFluidOriginalName = 'banner___childImageSharp___fluid___originalName',
  BannerChildImageSharpFluidPresentationWidth = 'banner___childImageSharp___fluid___presentationWidth',
  BannerChildImageSharpFluidPresentationHeight = 'banner___childImageSharp___fluid___presentationHeight',
  BannerChildImageSharpSizesBase64 = 'banner___childImageSharp___sizes___base64',
  BannerChildImageSharpSizesTracedSvg = 'banner___childImageSharp___sizes___tracedSVG',
  BannerChildImageSharpSizesAspectRatio = 'banner___childImageSharp___sizes___aspectRatio',
  BannerChildImageSharpSizesSrc = 'banner___childImageSharp___sizes___src',
  BannerChildImageSharpSizesSrcSet = 'banner___childImageSharp___sizes___srcSet',
  BannerChildImageSharpSizesSrcWebp = 'banner___childImageSharp___sizes___srcWebp',
  BannerChildImageSharpSizesSrcSetWebp = 'banner___childImageSharp___sizes___srcSetWebp',
  BannerChildImageSharpSizesSizes = 'banner___childImageSharp___sizes___sizes',
  BannerChildImageSharpSizesOriginalImg = 'banner___childImageSharp___sizes___originalImg',
  BannerChildImageSharpSizesOriginalName = 'banner___childImageSharp___sizes___originalName',
  BannerChildImageSharpSizesPresentationWidth = 'banner___childImageSharp___sizes___presentationWidth',
  BannerChildImageSharpSizesPresentationHeight = 'banner___childImageSharp___sizes___presentationHeight',
  BannerChildImageSharpOriginalWidth = 'banner___childImageSharp___original___width',
  BannerChildImageSharpOriginalHeight = 'banner___childImageSharp___original___height',
  BannerChildImageSharpOriginalSrc = 'banner___childImageSharp___original___src',
  BannerChildImageSharpResizeSrc = 'banner___childImageSharp___resize___src',
  BannerChildImageSharpResizeTracedSvg = 'banner___childImageSharp___resize___tracedSVG',
  BannerChildImageSharpResizeWidth = 'banner___childImageSharp___resize___width',
  BannerChildImageSharpResizeHeight = 'banner___childImageSharp___resize___height',
  BannerChildImageSharpResizeAspectRatio = 'banner___childImageSharp___resize___aspectRatio',
  BannerChildImageSharpResizeOriginalName = 'banner___childImageSharp___resize___originalName',
  BannerChildImageSharpId = 'banner___childImageSharp___id',
  BannerChildImageSharpParentId = 'banner___childImageSharp___parent___id',
  BannerChildImageSharpParentChildren = 'banner___childImageSharp___parent___children',
  BannerChildImageSharpChildren = 'banner___childImageSharp___children',
  BannerChildImageSharpChildrenId = 'banner___childImageSharp___children___id',
  BannerChildImageSharpChildrenChildren = 'banner___childImageSharp___children___children',
  BannerChildImageSharpInternalContent = 'banner___childImageSharp___internal___content',
  BannerChildImageSharpInternalContentDigest = 'banner___childImageSharp___internal___contentDigest',
  BannerChildImageSharpInternalDescription = 'banner___childImageSharp___internal___description',
  BannerChildImageSharpInternalFieldOwners = 'banner___childImageSharp___internal___fieldOwners',
  BannerChildImageSharpInternalIgnoreType = 'banner___childImageSharp___internal___ignoreType',
  BannerChildImageSharpInternalMediaType = 'banner___childImageSharp___internal___mediaType',
  BannerChildImageSharpInternalOwner = 'banner___childImageSharp___internal___owner',
  BannerChildImageSharpInternalType = 'banner___childImageSharp___internal___type',
  BannerId = 'banner___id',
  BannerParentId = 'banner___parent___id',
  BannerParentParentId = 'banner___parent___parent___id',
  BannerParentParentChildren = 'banner___parent___parent___children',
  BannerParentChildren = 'banner___parent___children',
  BannerParentChildrenId = 'banner___parent___children___id',
  BannerParentChildrenChildren = 'banner___parent___children___children',
  BannerParentInternalContent = 'banner___parent___internal___content',
  BannerParentInternalContentDigest = 'banner___parent___internal___contentDigest',
  BannerParentInternalDescription = 'banner___parent___internal___description',
  BannerParentInternalFieldOwners = 'banner___parent___internal___fieldOwners',
  BannerParentInternalIgnoreType = 'banner___parent___internal___ignoreType',
  BannerParentInternalMediaType = 'banner___parent___internal___mediaType',
  BannerParentInternalOwner = 'banner___parent___internal___owner',
  BannerParentInternalType = 'banner___parent___internal___type',
  BannerChildren = 'banner___children',
  BannerChildrenId = 'banner___children___id',
  BannerChildrenParentId = 'banner___children___parent___id',
  BannerChildrenParentChildren = 'banner___children___parent___children',
  BannerChildrenChildren = 'banner___children___children',
  BannerChildrenChildrenId = 'banner___children___children___id',
  BannerChildrenChildrenChildren = 'banner___children___children___children',
  BannerChildrenInternalContent = 'banner___children___internal___content',
  BannerChildrenInternalContentDigest = 'banner___children___internal___contentDigest',
  BannerChildrenInternalDescription = 'banner___children___internal___description',
  BannerChildrenInternalFieldOwners = 'banner___children___internal___fieldOwners',
  BannerChildrenInternalIgnoreType = 'banner___children___internal___ignoreType',
  BannerChildrenInternalMediaType = 'banner___children___internal___mediaType',
  BannerChildrenInternalOwner = 'banner___children___internal___owner',
  BannerChildrenInternalType = 'banner___children___internal___type',
  BannerInternalContent = 'banner___internal___content',
  BannerInternalContentDigest = 'banner___internal___contentDigest',
  BannerInternalDescription = 'banner___internal___description',
  BannerInternalFieldOwners = 'banner___internal___fieldOwners',
  BannerInternalIgnoreType = 'banner___internal___ignoreType',
  BannerInternalMediaType = 'banner___internal___mediaType',
  BannerInternalOwner = 'banner___internal___owner',
  BannerInternalType = 'banner___internal___type',
  BannerChildMdxRawBody = 'banner___childMdx___rawBody',
  BannerChildMdxFileAbsolutePath = 'banner___childMdx___fileAbsolutePath',
  BannerChildMdxFrontmatterTitle = 'banner___childMdx___frontmatter___title',
  BannerChildMdxFrontmatterDate = 'banner___childMdx___frontmatter___date',
  BannerChildMdxFrontmatterDescription = 'banner___childMdx___frontmatter___description',
  BannerChildMdxFrontmatterCategory = 'banner___childMdx___frontmatter___category',
  BannerChildMdxFrontmatterTags = 'banner___childMdx___frontmatter___tags',
  BannerChildMdxFrontmatterKeywords = 'banner___childMdx___frontmatter___keywords',
  BannerChildMdxFrontmatterBannerStyle = 'banner___childMdx___frontmatter___bannerStyle',
  BannerChildMdxFrontmatterSlug = 'banner___childMdx___frontmatter___slug',
  BannerChildMdxBody = 'banner___childMdx___body',
  BannerChildMdxExcerpt = 'banner___childMdx___excerpt',
  BannerChildMdxHeadings = 'banner___childMdx___headings',
  BannerChildMdxHeadingsValue = 'banner___childMdx___headings___value',
  BannerChildMdxHeadingsDepth = 'banner___childMdx___headings___depth',
  BannerChildMdxHtml = 'banner___childMdx___html',
  BannerChildMdxMdxAst = 'banner___childMdx___mdxAST',
  BannerChildMdxTableOfContents = 'banner___childMdx___tableOfContents',
  BannerChildMdxTimeToRead = 'banner___childMdx___timeToRead',
  BannerChildMdxWordCountParagraphs = 'banner___childMdx___wordCount___paragraphs',
  BannerChildMdxWordCountSentences = 'banner___childMdx___wordCount___sentences',
  BannerChildMdxWordCountWords = 'banner___childMdx___wordCount___words',
  BannerChildMdxId = 'banner___childMdx___id',
  BannerChildMdxParentId = 'banner___childMdx___parent___id',
  BannerChildMdxParentChildren = 'banner___childMdx___parent___children',
  BannerChildMdxChildren = 'banner___childMdx___children',
  BannerChildMdxChildrenId = 'banner___childMdx___children___id',
  BannerChildMdxChildrenChildren = 'banner___childMdx___children___children',
  BannerChildMdxInternalContent = 'banner___childMdx___internal___content',
  BannerChildMdxInternalContentDigest = 'banner___childMdx___internal___contentDigest',
  BannerChildMdxInternalDescription = 'banner___childMdx___internal___description',
  BannerChildMdxInternalFieldOwners = 'banner___childMdx___internal___fieldOwners',
  BannerChildMdxInternalIgnoreType = 'banner___childMdx___internal___ignoreType',
  BannerChildMdxInternalMediaType = 'banner___childMdx___internal___mediaType',
  BannerChildMdxInternalOwner = 'banner___childMdx___internal___owner',
  BannerChildMdxInternalType = 'banner___childMdx___internal___type',
  BannerChildMdxChildMdxBlogPostId = 'banner___childMdx___childMdxBlogPost___id',
  BannerChildMdxChildMdxBlogPostGlobalBlogPostId = 'banner___childMdx___childMdxBlogPost___globalBlogPostId',
  BannerChildMdxChildMdxBlogPostTitle = 'banner___childMdx___childMdxBlogPost___title',
  BannerChildMdxChildMdxBlogPostBannerStyle = 'banner___childMdx___childMdxBlogPost___bannerStyle',
  BannerChildMdxChildMdxBlogPostSlug = 'banner___childMdx___childMdxBlogPost___slug',
  BannerChildMdxChildMdxBlogPostLangKey = 'banner___childMdx___childMdxBlogPost___langKey',
  BannerChildMdxChildMdxBlogPostDate = 'banner___childMdx___childMdxBlogPost___date',
  BannerChildMdxChildMdxBlogPostTags = 'banner___childMdx___childMdxBlogPost___tags',
  BannerChildMdxChildMdxBlogPostCategory = 'banner___childMdx___childMdxBlogPost___category',
  BannerChildMdxChildMdxBlogPostCategorySlug = 'banner___childMdx___childMdxBlogPost___categorySlug',
  BannerChildMdxChildMdxBlogPostDescription = 'banner___childMdx___childMdxBlogPost___description',
  BannerChildMdxChildMdxBlogPostKeywords = 'banner___childMdx___childMdxBlogPost___keywords',
  BannerChildMdxChildMdxBlogPostTableOfContents = 'banner___childMdx___childMdxBlogPost___tableOfContents',
  BannerChildMdxChildMdxBlogPostExcerpt = 'banner___childMdx___childMdxBlogPost___excerpt',
  BannerChildMdxChildMdxBlogPostBody = 'banner___childMdx___childMdxBlogPost___body',
  BannerChildMdxChildMdxBlogPostChildren = 'banner___childMdx___childMdxBlogPost___children',
  BannerStyle = 'bannerStyle',
  ExternalLinksDevto = 'externalLinks___devto',
  ExternalLinksCanonical = 'externalLinks___canonical',
  ExternalLinksGithub = 'externalLinks___github',
  Slug = 'slug',
  LangKey = 'langKey',
  Date = 'date',
  Tags = 'tags',
  Category = 'category',
  CategorySlug = 'categorySlug',
  TableOfContents = 'tableOfContents',
  Description = 'description',
  Keywords = 'keywords',
}

export type BlogPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  globalBlogPostId?: Maybe<IdQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  body?: Maybe<StringQueryOperatorInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  banner?: Maybe<FileFilterInput>
  bannerStyle?: Maybe<BannerStyleQueryOperatorInput>
  externalLinks?: Maybe<ExternalLinksFilterInput>
  slug?: Maybe<StringQueryOperatorInput>
  langKey?: Maybe<LangKeyQueryOperatorInput>
  date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  category?: Maybe<StringQueryOperatorInput>
  categorySlug?: Maybe<StringQueryOperatorInput>
  tableOfContents?: Maybe<JsonQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  keywords?: Maybe<StringQueryOperatorInput>
}

export type BlogPostGroupConnection = {
  __typename?: 'BlogPostGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<BlogPostEdge>
  nodes: Array<BlogPost>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type BlogPostSortInput = {
  fields?: Maybe<Array<Maybe<BlogPostFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>
  ne?: Maybe<Scalars['Boolean']>
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>
  ne?: Maybe<Scalars['Date']>
  gt?: Maybe<Scalars['Date']>
  gte?: Maybe<Scalars['Date']>
  lt?: Maybe<Scalars['Date']>
  lte?: Maybe<Scalars['Date']>
  in?: Maybe<Array<Maybe<Scalars['Date']>>>
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type Directory = Node & {
  __typename?: 'Directory'
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection'
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge'
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type DuotoneGradient = {
  highlight: Scalars['String']
  shadow: Scalars['String']
  opacity?: Maybe<Scalars['Int']>
}

export type ExternalLinks = {
  __typename?: 'ExternalLinks'
  devto?: Maybe<Scalars['String']>
  canonical?: Maybe<Scalars['String']>
  github: Scalars['String']
}

export type ExternalLinksFilterInput = {
  devto?: Maybe<StringQueryOperatorInput>
  canonical?: Maybe<StringQueryOperatorInput>
  github?: Maybe<StringQueryOperatorInput>
}

export type File = Node & {
  __typename?: 'File'
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>
  childImageSharp?: Maybe<ImageSharp>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  childMdx?: Maybe<Mdx>
}

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileConnection = {
  __typename?: 'FileConnection'
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: FileFieldsEnum
}

export type FileEdge = {
  __typename?: 'FileEdge'
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildMdxRawBody = 'childMdx___rawBody',
  ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
  ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
  ChildMdxFrontmatterDate = 'childMdx___frontmatter___date',
  ChildMdxFrontmatterDescription = 'childMdx___frontmatter___description',
  ChildMdxFrontmatterCategory = 'childMdx___frontmatter___category',
  ChildMdxFrontmatterTags = 'childMdx___frontmatter___tags',
  ChildMdxFrontmatterKeywords = 'childMdx___frontmatter___keywords',
  ChildMdxFrontmatterBannerSourceInstanceName = 'childMdx___frontmatter___banner___sourceInstanceName',
  ChildMdxFrontmatterBannerAbsolutePath = 'childMdx___frontmatter___banner___absolutePath',
  ChildMdxFrontmatterBannerRelativePath = 'childMdx___frontmatter___banner___relativePath',
  ChildMdxFrontmatterBannerExtension = 'childMdx___frontmatter___banner___extension',
  ChildMdxFrontmatterBannerSize = 'childMdx___frontmatter___banner___size',
  ChildMdxFrontmatterBannerPrettySize = 'childMdx___frontmatter___banner___prettySize',
  ChildMdxFrontmatterBannerModifiedTime = 'childMdx___frontmatter___banner___modifiedTime',
  ChildMdxFrontmatterBannerAccessTime = 'childMdx___frontmatter___banner___accessTime',
  ChildMdxFrontmatterBannerChangeTime = 'childMdx___frontmatter___banner___changeTime',
  ChildMdxFrontmatterBannerBirthTime = 'childMdx___frontmatter___banner___birthTime',
  ChildMdxFrontmatterBannerRoot = 'childMdx___frontmatter___banner___root',
  ChildMdxFrontmatterBannerDir = 'childMdx___frontmatter___banner___dir',
  ChildMdxFrontmatterBannerBase = 'childMdx___frontmatter___banner___base',
  ChildMdxFrontmatterBannerExt = 'childMdx___frontmatter___banner___ext',
  ChildMdxFrontmatterBannerName = 'childMdx___frontmatter___banner___name',
  ChildMdxFrontmatterBannerRelativeDirectory = 'childMdx___frontmatter___banner___relativeDirectory',
  ChildMdxFrontmatterBannerDev = 'childMdx___frontmatter___banner___dev',
  ChildMdxFrontmatterBannerMode = 'childMdx___frontmatter___banner___mode',
  ChildMdxFrontmatterBannerNlink = 'childMdx___frontmatter___banner___nlink',
  ChildMdxFrontmatterBannerUid = 'childMdx___frontmatter___banner___uid',
  ChildMdxFrontmatterBannerGid = 'childMdx___frontmatter___banner___gid',
  ChildMdxFrontmatterBannerRdev = 'childMdx___frontmatter___banner___rdev',
  ChildMdxFrontmatterBannerIno = 'childMdx___frontmatter___banner___ino',
  ChildMdxFrontmatterBannerAtimeMs = 'childMdx___frontmatter___banner___atimeMs',
  ChildMdxFrontmatterBannerMtimeMs = 'childMdx___frontmatter___banner___mtimeMs',
  ChildMdxFrontmatterBannerCtimeMs = 'childMdx___frontmatter___banner___ctimeMs',
  ChildMdxFrontmatterBannerAtime = 'childMdx___frontmatter___banner___atime',
  ChildMdxFrontmatterBannerMtime = 'childMdx___frontmatter___banner___mtime',
  ChildMdxFrontmatterBannerCtime = 'childMdx___frontmatter___banner___ctime',
  ChildMdxFrontmatterBannerBirthtime = 'childMdx___frontmatter___banner___birthtime',
  ChildMdxFrontmatterBannerBirthtimeMs = 'childMdx___frontmatter___banner___birthtimeMs',
  ChildMdxFrontmatterBannerBlksize = 'childMdx___frontmatter___banner___blksize',
  ChildMdxFrontmatterBannerBlocks = 'childMdx___frontmatter___banner___blocks',
  ChildMdxFrontmatterBannerPublicUrl = 'childMdx___frontmatter___banner___publicURL',
  ChildMdxFrontmatterBannerId = 'childMdx___frontmatter___banner___id',
  ChildMdxFrontmatterBannerChildren = 'childMdx___frontmatter___banner___children',
  ChildMdxFrontmatterBannerStyle = 'childMdx___frontmatter___bannerStyle',
  ChildMdxFrontmatterExternalLinksCanonical = 'childMdx___frontmatter___externalLinks___canonical',
  ChildMdxFrontmatterSlug = 'childMdx___frontmatter___slug',
  ChildMdxBody = 'childMdx___body',
  ChildMdxExcerpt = 'childMdx___excerpt',
  ChildMdxHeadings = 'childMdx___headings',
  ChildMdxHeadingsValue = 'childMdx___headings___value',
  ChildMdxHeadingsDepth = 'childMdx___headings___depth',
  ChildMdxHtml = 'childMdx___html',
  ChildMdxMdxAst = 'childMdx___mdxAST',
  ChildMdxTableOfContents = 'childMdx___tableOfContents',
  ChildMdxTimeToRead = 'childMdx___timeToRead',
  ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
  ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
  ChildMdxWordCountWords = 'childMdx___wordCount___words',
  ChildMdxId = 'childMdx___id',
  ChildMdxParentId = 'childMdx___parent___id',
  ChildMdxParentParentId = 'childMdx___parent___parent___id',
  ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
  ChildMdxParentChildren = 'childMdx___parent___children',
  ChildMdxParentChildrenId = 'childMdx___parent___children___id',
  ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
  ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
  ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
  ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
  ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
  ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
  ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
  ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
  ChildMdxParentInternalType = 'childMdx___parent___internal___type',
  ChildMdxChildren = 'childMdx___children',
  ChildMdxChildrenId = 'childMdx___children___id',
  ChildMdxChildrenParentId = 'childMdx___children___parent___id',
  ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
  ChildMdxChildrenChildren = 'childMdx___children___children',
  ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
  ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
  ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
  ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
  ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
  ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
  ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
  ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
  ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
  ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
  ChildMdxInternalContent = 'childMdx___internal___content',
  ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
  ChildMdxInternalDescription = 'childMdx___internal___description',
  ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
  ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
  ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
  ChildMdxInternalOwner = 'childMdx___internal___owner',
  ChildMdxInternalType = 'childMdx___internal___type',
  ChildMdxChildMdxBlogPostId = 'childMdx___childMdxBlogPost___id',
  ChildMdxChildMdxBlogPostGlobalBlogPostId = 'childMdx___childMdxBlogPost___globalBlogPostId',
  ChildMdxChildMdxBlogPostTitle = 'childMdx___childMdxBlogPost___title',
  ChildMdxChildMdxBlogPostBannerSourceInstanceName = 'childMdx___childMdxBlogPost___banner___sourceInstanceName',
  ChildMdxChildMdxBlogPostBannerAbsolutePath = 'childMdx___childMdxBlogPost___banner___absolutePath',
  ChildMdxChildMdxBlogPostBannerRelativePath = 'childMdx___childMdxBlogPost___banner___relativePath',
  ChildMdxChildMdxBlogPostBannerExtension = 'childMdx___childMdxBlogPost___banner___extension',
  ChildMdxChildMdxBlogPostBannerSize = 'childMdx___childMdxBlogPost___banner___size',
  ChildMdxChildMdxBlogPostBannerPrettySize = 'childMdx___childMdxBlogPost___banner___prettySize',
  ChildMdxChildMdxBlogPostBannerModifiedTime = 'childMdx___childMdxBlogPost___banner___modifiedTime',
  ChildMdxChildMdxBlogPostBannerAccessTime = 'childMdx___childMdxBlogPost___banner___accessTime',
  ChildMdxChildMdxBlogPostBannerChangeTime = 'childMdx___childMdxBlogPost___banner___changeTime',
  ChildMdxChildMdxBlogPostBannerBirthTime = 'childMdx___childMdxBlogPost___banner___birthTime',
  ChildMdxChildMdxBlogPostBannerRoot = 'childMdx___childMdxBlogPost___banner___root',
  ChildMdxChildMdxBlogPostBannerDir = 'childMdx___childMdxBlogPost___banner___dir',
  ChildMdxChildMdxBlogPostBannerBase = 'childMdx___childMdxBlogPost___banner___base',
  ChildMdxChildMdxBlogPostBannerExt = 'childMdx___childMdxBlogPost___banner___ext',
  ChildMdxChildMdxBlogPostBannerName = 'childMdx___childMdxBlogPost___banner___name',
  ChildMdxChildMdxBlogPostBannerRelativeDirectory = 'childMdx___childMdxBlogPost___banner___relativeDirectory',
  ChildMdxChildMdxBlogPostBannerDev = 'childMdx___childMdxBlogPost___banner___dev',
  ChildMdxChildMdxBlogPostBannerMode = 'childMdx___childMdxBlogPost___banner___mode',
  ChildMdxChildMdxBlogPostBannerNlink = 'childMdx___childMdxBlogPost___banner___nlink',
  ChildMdxChildMdxBlogPostBannerUid = 'childMdx___childMdxBlogPost___banner___uid',
  ChildMdxChildMdxBlogPostBannerGid = 'childMdx___childMdxBlogPost___banner___gid',
  ChildMdxChildMdxBlogPostBannerRdev = 'childMdx___childMdxBlogPost___banner___rdev',
  ChildMdxChildMdxBlogPostBannerIno = 'childMdx___childMdxBlogPost___banner___ino',
  ChildMdxChildMdxBlogPostBannerAtimeMs = 'childMdx___childMdxBlogPost___banner___atimeMs',
  ChildMdxChildMdxBlogPostBannerMtimeMs = 'childMdx___childMdxBlogPost___banner___mtimeMs',
  ChildMdxChildMdxBlogPostBannerCtimeMs = 'childMdx___childMdxBlogPost___banner___ctimeMs',
  ChildMdxChildMdxBlogPostBannerAtime = 'childMdx___childMdxBlogPost___banner___atime',
  ChildMdxChildMdxBlogPostBannerMtime = 'childMdx___childMdxBlogPost___banner___mtime',
  ChildMdxChildMdxBlogPostBannerCtime = 'childMdx___childMdxBlogPost___banner___ctime',
  ChildMdxChildMdxBlogPostBannerBirthtime = 'childMdx___childMdxBlogPost___banner___birthtime',
  ChildMdxChildMdxBlogPostBannerBirthtimeMs = 'childMdx___childMdxBlogPost___banner___birthtimeMs',
  ChildMdxChildMdxBlogPostBannerBlksize = 'childMdx___childMdxBlogPost___banner___blksize',
  ChildMdxChildMdxBlogPostBannerBlocks = 'childMdx___childMdxBlogPost___banner___blocks',
  ChildMdxChildMdxBlogPostBannerPublicUrl = 'childMdx___childMdxBlogPost___banner___publicURL',
  ChildMdxChildMdxBlogPostBannerId = 'childMdx___childMdxBlogPost___banner___id',
  ChildMdxChildMdxBlogPostBannerChildren = 'childMdx___childMdxBlogPost___banner___children',
  ChildMdxChildMdxBlogPostBannerStyle = 'childMdx___childMdxBlogPost___bannerStyle',
  ChildMdxChildMdxBlogPostExternalLinksDevto = 'childMdx___childMdxBlogPost___externalLinks___devto',
  ChildMdxChildMdxBlogPostExternalLinksCanonical = 'childMdx___childMdxBlogPost___externalLinks___canonical',
  ChildMdxChildMdxBlogPostExternalLinksGithub = 'childMdx___childMdxBlogPost___externalLinks___github',
  ChildMdxChildMdxBlogPostSlug = 'childMdx___childMdxBlogPost___slug',
  ChildMdxChildMdxBlogPostLangKey = 'childMdx___childMdxBlogPost___langKey',
  ChildMdxChildMdxBlogPostDate = 'childMdx___childMdxBlogPost___date',
  ChildMdxChildMdxBlogPostTags = 'childMdx___childMdxBlogPost___tags',
  ChildMdxChildMdxBlogPostCategory = 'childMdx___childMdxBlogPost___category',
  ChildMdxChildMdxBlogPostCategorySlug = 'childMdx___childMdxBlogPost___categorySlug',
  ChildMdxChildMdxBlogPostDescription = 'childMdx___childMdxBlogPost___description',
  ChildMdxChildMdxBlogPostKeywords = 'childMdx___childMdxBlogPost___keywords',
  ChildMdxChildMdxBlogPostTableOfContents = 'childMdx___childMdxBlogPost___tableOfContents',
  ChildMdxChildMdxBlogPostExcerpt = 'childMdx___childMdxBlogPost___excerpt',
  ChildMdxChildMdxBlogPostBody = 'childMdx___childMdxBlogPost___body',
  ChildMdxChildMdxBlogPostParentId = 'childMdx___childMdxBlogPost___parent___id',
  ChildMdxChildMdxBlogPostParentChildren = 'childMdx___childMdxBlogPost___parent___children',
  ChildMdxChildMdxBlogPostChildren = 'childMdx___childMdxBlogPost___children',
  ChildMdxChildMdxBlogPostChildrenId = 'childMdx___childMdxBlogPost___children___id',
  ChildMdxChildMdxBlogPostChildrenChildren = 'childMdx___childMdxBlogPost___children___children',
  ChildMdxChildMdxBlogPostInternalContent = 'childMdx___childMdxBlogPost___internal___content',
  ChildMdxChildMdxBlogPostInternalContentDigest = 'childMdx___childMdxBlogPost___internal___contentDigest',
  ChildMdxChildMdxBlogPostInternalDescription = 'childMdx___childMdxBlogPost___internal___description',
  ChildMdxChildMdxBlogPostInternalFieldOwners = 'childMdx___childMdxBlogPost___internal___fieldOwners',
  ChildMdxChildMdxBlogPostInternalIgnoreType = 'childMdx___childMdxBlogPost___internal___ignoreType',
  ChildMdxChildMdxBlogPostInternalMediaType = 'childMdx___childMdxBlogPost___internal___mediaType',
  ChildMdxChildMdxBlogPostInternalOwner = 'childMdx___childMdxBlogPost___internal___owner',
  ChildMdxChildMdxBlogPostInternalType = 'childMdx___childMdxBlogPost___internal___type',
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  childMdx?: Maybe<MdxFilterInput>
}

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>
  ne?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>
}

export enum HeadingsMdx {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export type IdQueryOperatorInput = {
  eq?: Maybe<Scalars['ID']>
  ne?: Maybe<Scalars['ID']>
  in?: Maybe<Array<Maybe<Scalars['ID']>>>
  nin?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION',
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE',
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp'
  fixed?: Maybe<ImageSharpFixed>
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>
  fluid?: Maybe<ImageSharpFluid>
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>
  original?: Maybe<ImageSharpOriginal>
  resize?: Maybe<ImageSharpResize>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  sizes?: Maybe<Scalars['String']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  sizes?: Maybe<Scalars['String']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionLevel?: Maybe<Scalars['Int']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  base64?: Maybe<Scalars['Boolean']>
  traceSVG?: Maybe<Potrace>
  toFormat?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection'
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ImageSharpGroupConnection>
}

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ImageSharpFieldsEnum
}

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge'
  next?: Maybe<ImageSharp>
  node: ImageSharp
  previous?: Maybe<ImageSharp>
}

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  sizes?: Maybe<ImageSharpSizesFilterInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
  originalImg?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
  presentationWidth: Scalars['Int']
  presentationHeight: Scalars['Int']
}

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  originalImg?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  presentationWidth?: Maybe<IntQueryOperatorInput>
  presentationHeight?: Maybe<IntQueryOperatorInput>
}

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
}

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize'
  src?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
  originalImg?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
  presentationWidth: Scalars['Int']
  presentationHeight: Scalars['Int']
}

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  originalImg?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  presentationWidth?: Maybe<IntQueryOperatorInput>
  presentationHeight?: Maybe<IntQueryOperatorInput>
}

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type Internal = {
  __typename?: 'Internal'
  content?: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  description?: Maybe<Scalars['String']>
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType?: Maybe<Scalars['Boolean']>
  mediaType?: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>
  contentDigest?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  fieldOwners?: Maybe<StringQueryOperatorInput>
  ignoreType?: Maybe<BooleanQueryOperatorInput>
  mediaType?: Maybe<StringQueryOperatorInput>
  owner?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>
  ne?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>
  ne?: Maybe<Scalars['JSON']>
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>
  regex?: Maybe<Scalars['JSON']>
  glob?: Maybe<Scalars['JSON']>
}

export enum LangKey {
  En = 'EN',
  PtBr = 'PT_BR',
}

export type LangKeyQueryOperatorInput = {
  eq?: Maybe<LangKey>
  ne?: Maybe<LangKey>
  in?: Maybe<Array<Maybe<LangKey>>>
  nin?: Maybe<Array<Maybe<LangKey>>>
}

export type Mdx = Node & {
  __typename?: 'Mdx'
  rawBody: Scalars['String']
  fileAbsolutePath: Scalars['String']
  frontmatter?: Maybe<MdxFrontmatter>
  body: Scalars['String']
  excerpt: Scalars['String']
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>
  html?: Maybe<Scalars['String']>
  mdxAST?: Maybe<Scalars['JSON']>
  tableOfContents?: Maybe<Scalars['JSON']>
  timeToRead?: Maybe<Scalars['Int']>
  wordCount?: Maybe<MdxWordCount>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  childMdxBlogPost?: Maybe<MdxBlogPost>
}

export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>
  truncate?: Maybe<Scalars['Boolean']>
}

export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>
}

export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>
}

export type MdxBlogPost = BlogPost &
  Node & {
    __typename?: 'MdxBlogPost'
    id: Scalars['ID']
    globalBlogPostId: Scalars['ID']
    title: Scalars['String']
    banner?: Maybe<File>
    bannerStyle?: Maybe<BannerStyle>
    externalLinks: ExternalLinks
    slug: Scalars['String']
    langKey: LangKey
    date: Scalars['Date']
    tags?: Maybe<Array<Scalars['String']>>
    category: Scalars['String']
    categorySlug: Scalars['String']
    description?: Maybe<Scalars['String']>
    keywords?: Maybe<Array<Scalars['String']>>
    tableOfContents: Scalars['JSON']
    excerpt: Scalars['String']
    body: Scalars['String']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type MdxBlogPostDateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type MdxBlogPostTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>
}

export type MdxBlogPostExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>
}

export type MdxBlogPostConnection = {
  __typename?: 'MdxBlogPostConnection'
  totalCount: Scalars['Int']
  edges: Array<MdxBlogPostEdge>
  nodes: Array<MdxBlogPost>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<MdxBlogPostGroupConnection>
}

export type MdxBlogPostConnectionDistinctArgs = {
  field: MdxBlogPostFieldsEnum
}

export type MdxBlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: MdxBlogPostFieldsEnum
}

export type MdxBlogPostEdge = {
  __typename?: 'MdxBlogPostEdge'
  next?: Maybe<MdxBlogPost>
  node: MdxBlogPost
  previous?: Maybe<MdxBlogPost>
}

export enum MdxBlogPostFieldsEnum {
  Id = 'id',
  GlobalBlogPostId = 'globalBlogPostId',
  Title = 'title',
  BannerSourceInstanceName = 'banner___sourceInstanceName',
  BannerAbsolutePath = 'banner___absolutePath',
  BannerRelativePath = 'banner___relativePath',
  BannerExtension = 'banner___extension',
  BannerSize = 'banner___size',
  BannerPrettySize = 'banner___prettySize',
  BannerModifiedTime = 'banner___modifiedTime',
  BannerAccessTime = 'banner___accessTime',
  BannerChangeTime = 'banner___changeTime',
  BannerBirthTime = 'banner___birthTime',
  BannerRoot = 'banner___root',
  BannerDir = 'banner___dir',
  BannerBase = 'banner___base',
  BannerExt = 'banner___ext',
  BannerName = 'banner___name',
  BannerRelativeDirectory = 'banner___relativeDirectory',
  BannerDev = 'banner___dev',
  BannerMode = 'banner___mode',
  BannerNlink = 'banner___nlink',
  BannerUid = 'banner___uid',
  BannerGid = 'banner___gid',
  BannerRdev = 'banner___rdev',
  BannerIno = 'banner___ino',
  BannerAtimeMs = 'banner___atimeMs',
  BannerMtimeMs = 'banner___mtimeMs',
  BannerCtimeMs = 'banner___ctimeMs',
  BannerAtime = 'banner___atime',
  BannerMtime = 'banner___mtime',
  BannerCtime = 'banner___ctime',
  BannerBirthtime = 'banner___birthtime',
  BannerBirthtimeMs = 'banner___birthtimeMs',
  BannerBlksize = 'banner___blksize',
  BannerBlocks = 'banner___blocks',
  BannerPublicUrl = 'banner___publicURL',
  BannerChildImageSharpFixedBase64 = 'banner___childImageSharp___fixed___base64',
  BannerChildImageSharpFixedTracedSvg = 'banner___childImageSharp___fixed___tracedSVG',
  BannerChildImageSharpFixedAspectRatio = 'banner___childImageSharp___fixed___aspectRatio',
  BannerChildImageSharpFixedWidth = 'banner___childImageSharp___fixed___width',
  BannerChildImageSharpFixedHeight = 'banner___childImageSharp___fixed___height',
  BannerChildImageSharpFixedSrc = 'banner___childImageSharp___fixed___src',
  BannerChildImageSharpFixedSrcSet = 'banner___childImageSharp___fixed___srcSet',
  BannerChildImageSharpFixedSrcWebp = 'banner___childImageSharp___fixed___srcWebp',
  BannerChildImageSharpFixedSrcSetWebp = 'banner___childImageSharp___fixed___srcSetWebp',
  BannerChildImageSharpFixedOriginalName = 'banner___childImageSharp___fixed___originalName',
  BannerChildImageSharpResolutionsBase64 = 'banner___childImageSharp___resolutions___base64',
  BannerChildImageSharpResolutionsTracedSvg = 'banner___childImageSharp___resolutions___tracedSVG',
  BannerChildImageSharpResolutionsAspectRatio = 'banner___childImageSharp___resolutions___aspectRatio',
  BannerChildImageSharpResolutionsWidth = 'banner___childImageSharp___resolutions___width',
  BannerChildImageSharpResolutionsHeight = 'banner___childImageSharp___resolutions___height',
  BannerChildImageSharpResolutionsSrc = 'banner___childImageSharp___resolutions___src',
  BannerChildImageSharpResolutionsSrcSet = 'banner___childImageSharp___resolutions___srcSet',
  BannerChildImageSharpResolutionsSrcWebp = 'banner___childImageSharp___resolutions___srcWebp',
  BannerChildImageSharpResolutionsSrcSetWebp = 'banner___childImageSharp___resolutions___srcSetWebp',
  BannerChildImageSharpResolutionsOriginalName = 'banner___childImageSharp___resolutions___originalName',
  BannerChildImageSharpFluidBase64 = 'banner___childImageSharp___fluid___base64',
  BannerChildImageSharpFluidTracedSvg = 'banner___childImageSharp___fluid___tracedSVG',
  BannerChildImageSharpFluidAspectRatio = 'banner___childImageSharp___fluid___aspectRatio',
  BannerChildImageSharpFluidSrc = 'banner___childImageSharp___fluid___src',
  BannerChildImageSharpFluidSrcSet = 'banner___childImageSharp___fluid___srcSet',
  BannerChildImageSharpFluidSrcWebp = 'banner___childImageSharp___fluid___srcWebp',
  BannerChildImageSharpFluidSrcSetWebp = 'banner___childImageSharp___fluid___srcSetWebp',
  BannerChildImageSharpFluidSizes = 'banner___childImageSharp___fluid___sizes',
  BannerChildImageSharpFluidOriginalImg = 'banner___childImageSharp___fluid___originalImg',
  BannerChildImageSharpFluidOriginalName = 'banner___childImageSharp___fluid___originalName',
  BannerChildImageSharpFluidPresentationWidth = 'banner___childImageSharp___fluid___presentationWidth',
  BannerChildImageSharpFluidPresentationHeight = 'banner___childImageSharp___fluid___presentationHeight',
  BannerChildImageSharpSizesBase64 = 'banner___childImageSharp___sizes___base64',
  BannerChildImageSharpSizesTracedSvg = 'banner___childImageSharp___sizes___tracedSVG',
  BannerChildImageSharpSizesAspectRatio = 'banner___childImageSharp___sizes___aspectRatio',
  BannerChildImageSharpSizesSrc = 'banner___childImageSharp___sizes___src',
  BannerChildImageSharpSizesSrcSet = 'banner___childImageSharp___sizes___srcSet',
  BannerChildImageSharpSizesSrcWebp = 'banner___childImageSharp___sizes___srcWebp',
  BannerChildImageSharpSizesSrcSetWebp = 'banner___childImageSharp___sizes___srcSetWebp',
  BannerChildImageSharpSizesSizes = 'banner___childImageSharp___sizes___sizes',
  BannerChildImageSharpSizesOriginalImg = 'banner___childImageSharp___sizes___originalImg',
  BannerChildImageSharpSizesOriginalName = 'banner___childImageSharp___sizes___originalName',
  BannerChildImageSharpSizesPresentationWidth = 'banner___childImageSharp___sizes___presentationWidth',
  BannerChildImageSharpSizesPresentationHeight = 'banner___childImageSharp___sizes___presentationHeight',
  BannerChildImageSharpOriginalWidth = 'banner___childImageSharp___original___width',
  BannerChildImageSharpOriginalHeight = 'banner___childImageSharp___original___height',
  BannerChildImageSharpOriginalSrc = 'banner___childImageSharp___original___src',
  BannerChildImageSharpResizeSrc = 'banner___childImageSharp___resize___src',
  BannerChildImageSharpResizeTracedSvg = 'banner___childImageSharp___resize___tracedSVG',
  BannerChildImageSharpResizeWidth = 'banner___childImageSharp___resize___width',
  BannerChildImageSharpResizeHeight = 'banner___childImageSharp___resize___height',
  BannerChildImageSharpResizeAspectRatio = 'banner___childImageSharp___resize___aspectRatio',
  BannerChildImageSharpResizeOriginalName = 'banner___childImageSharp___resize___originalName',
  BannerChildImageSharpId = 'banner___childImageSharp___id',
  BannerChildImageSharpParentId = 'banner___childImageSharp___parent___id',
  BannerChildImageSharpParentChildren = 'banner___childImageSharp___parent___children',
  BannerChildImageSharpChildren = 'banner___childImageSharp___children',
  BannerChildImageSharpChildrenId = 'banner___childImageSharp___children___id',
  BannerChildImageSharpChildrenChildren = 'banner___childImageSharp___children___children',
  BannerChildImageSharpInternalContent = 'banner___childImageSharp___internal___content',
  BannerChildImageSharpInternalContentDigest = 'banner___childImageSharp___internal___contentDigest',
  BannerChildImageSharpInternalDescription = 'banner___childImageSharp___internal___description',
  BannerChildImageSharpInternalFieldOwners = 'banner___childImageSharp___internal___fieldOwners',
  BannerChildImageSharpInternalIgnoreType = 'banner___childImageSharp___internal___ignoreType',
  BannerChildImageSharpInternalMediaType = 'banner___childImageSharp___internal___mediaType',
  BannerChildImageSharpInternalOwner = 'banner___childImageSharp___internal___owner',
  BannerChildImageSharpInternalType = 'banner___childImageSharp___internal___type',
  BannerId = 'banner___id',
  BannerParentId = 'banner___parent___id',
  BannerParentParentId = 'banner___parent___parent___id',
  BannerParentParentChildren = 'banner___parent___parent___children',
  BannerParentChildren = 'banner___parent___children',
  BannerParentChildrenId = 'banner___parent___children___id',
  BannerParentChildrenChildren = 'banner___parent___children___children',
  BannerParentInternalContent = 'banner___parent___internal___content',
  BannerParentInternalContentDigest = 'banner___parent___internal___contentDigest',
  BannerParentInternalDescription = 'banner___parent___internal___description',
  BannerParentInternalFieldOwners = 'banner___parent___internal___fieldOwners',
  BannerParentInternalIgnoreType = 'banner___parent___internal___ignoreType',
  BannerParentInternalMediaType = 'banner___parent___internal___mediaType',
  BannerParentInternalOwner = 'banner___parent___internal___owner',
  BannerParentInternalType = 'banner___parent___internal___type',
  BannerChildren = 'banner___children',
  BannerChildrenId = 'banner___children___id',
  BannerChildrenParentId = 'banner___children___parent___id',
  BannerChildrenParentChildren = 'banner___children___parent___children',
  BannerChildrenChildren = 'banner___children___children',
  BannerChildrenChildrenId = 'banner___children___children___id',
  BannerChildrenChildrenChildren = 'banner___children___children___children',
  BannerChildrenInternalContent = 'banner___children___internal___content',
  BannerChildrenInternalContentDigest = 'banner___children___internal___contentDigest',
  BannerChildrenInternalDescription = 'banner___children___internal___description',
  BannerChildrenInternalFieldOwners = 'banner___children___internal___fieldOwners',
  BannerChildrenInternalIgnoreType = 'banner___children___internal___ignoreType',
  BannerChildrenInternalMediaType = 'banner___children___internal___mediaType',
  BannerChildrenInternalOwner = 'banner___children___internal___owner',
  BannerChildrenInternalType = 'banner___children___internal___type',
  BannerInternalContent = 'banner___internal___content',
  BannerInternalContentDigest = 'banner___internal___contentDigest',
  BannerInternalDescription = 'banner___internal___description',
  BannerInternalFieldOwners = 'banner___internal___fieldOwners',
  BannerInternalIgnoreType = 'banner___internal___ignoreType',
  BannerInternalMediaType = 'banner___internal___mediaType',
  BannerInternalOwner = 'banner___internal___owner',
  BannerInternalType = 'banner___internal___type',
  BannerChildMdxRawBody = 'banner___childMdx___rawBody',
  BannerChildMdxFileAbsolutePath = 'banner___childMdx___fileAbsolutePath',
  BannerChildMdxFrontmatterTitle = 'banner___childMdx___frontmatter___title',
  BannerChildMdxFrontmatterDate = 'banner___childMdx___frontmatter___date',
  BannerChildMdxFrontmatterDescription = 'banner___childMdx___frontmatter___description',
  BannerChildMdxFrontmatterCategory = 'banner___childMdx___frontmatter___category',
  BannerChildMdxFrontmatterTags = 'banner___childMdx___frontmatter___tags',
  BannerChildMdxFrontmatterKeywords = 'banner___childMdx___frontmatter___keywords',
  BannerChildMdxFrontmatterBannerStyle = 'banner___childMdx___frontmatter___bannerStyle',
  BannerChildMdxFrontmatterSlug = 'banner___childMdx___frontmatter___slug',
  BannerChildMdxBody = 'banner___childMdx___body',
  BannerChildMdxExcerpt = 'banner___childMdx___excerpt',
  BannerChildMdxHeadings = 'banner___childMdx___headings',
  BannerChildMdxHeadingsValue = 'banner___childMdx___headings___value',
  BannerChildMdxHeadingsDepth = 'banner___childMdx___headings___depth',
  BannerChildMdxHtml = 'banner___childMdx___html',
  BannerChildMdxMdxAst = 'banner___childMdx___mdxAST',
  BannerChildMdxTableOfContents = 'banner___childMdx___tableOfContents',
  BannerChildMdxTimeToRead = 'banner___childMdx___timeToRead',
  BannerChildMdxWordCountParagraphs = 'banner___childMdx___wordCount___paragraphs',
  BannerChildMdxWordCountSentences = 'banner___childMdx___wordCount___sentences',
  BannerChildMdxWordCountWords = 'banner___childMdx___wordCount___words',
  BannerChildMdxId = 'banner___childMdx___id',
  BannerChildMdxParentId = 'banner___childMdx___parent___id',
  BannerChildMdxParentChildren = 'banner___childMdx___parent___children',
  BannerChildMdxChildren = 'banner___childMdx___children',
  BannerChildMdxChildrenId = 'banner___childMdx___children___id',
  BannerChildMdxChildrenChildren = 'banner___childMdx___children___children',
  BannerChildMdxInternalContent = 'banner___childMdx___internal___content',
  BannerChildMdxInternalContentDigest = 'banner___childMdx___internal___contentDigest',
  BannerChildMdxInternalDescription = 'banner___childMdx___internal___description',
  BannerChildMdxInternalFieldOwners = 'banner___childMdx___internal___fieldOwners',
  BannerChildMdxInternalIgnoreType = 'banner___childMdx___internal___ignoreType',
  BannerChildMdxInternalMediaType = 'banner___childMdx___internal___mediaType',
  BannerChildMdxInternalOwner = 'banner___childMdx___internal___owner',
  BannerChildMdxInternalType = 'banner___childMdx___internal___type',
  BannerChildMdxChildMdxBlogPostId = 'banner___childMdx___childMdxBlogPost___id',
  BannerChildMdxChildMdxBlogPostGlobalBlogPostId = 'banner___childMdx___childMdxBlogPost___globalBlogPostId',
  BannerChildMdxChildMdxBlogPostTitle = 'banner___childMdx___childMdxBlogPost___title',
  BannerChildMdxChildMdxBlogPostBannerStyle = 'banner___childMdx___childMdxBlogPost___bannerStyle',
  BannerChildMdxChildMdxBlogPostSlug = 'banner___childMdx___childMdxBlogPost___slug',
  BannerChildMdxChildMdxBlogPostLangKey = 'banner___childMdx___childMdxBlogPost___langKey',
  BannerChildMdxChildMdxBlogPostDate = 'banner___childMdx___childMdxBlogPost___date',
  BannerChildMdxChildMdxBlogPostTags = 'banner___childMdx___childMdxBlogPost___tags',
  BannerChildMdxChildMdxBlogPostCategory = 'banner___childMdx___childMdxBlogPost___category',
  BannerChildMdxChildMdxBlogPostCategorySlug = 'banner___childMdx___childMdxBlogPost___categorySlug',
  BannerChildMdxChildMdxBlogPostDescription = 'banner___childMdx___childMdxBlogPost___description',
  BannerChildMdxChildMdxBlogPostKeywords = 'banner___childMdx___childMdxBlogPost___keywords',
  BannerChildMdxChildMdxBlogPostTableOfContents = 'banner___childMdx___childMdxBlogPost___tableOfContents',
  BannerChildMdxChildMdxBlogPostExcerpt = 'banner___childMdx___childMdxBlogPost___excerpt',
  BannerChildMdxChildMdxBlogPostBody = 'banner___childMdx___childMdxBlogPost___body',
  BannerChildMdxChildMdxBlogPostChildren = 'banner___childMdx___childMdxBlogPost___children',
  BannerStyle = 'bannerStyle',
  ExternalLinksDevto = 'externalLinks___devto',
  ExternalLinksCanonical = 'externalLinks___canonical',
  ExternalLinksGithub = 'externalLinks___github',
  Slug = 'slug',
  LangKey = 'langKey',
  Date = 'date',
  Tags = 'tags',
  Category = 'category',
  CategorySlug = 'categorySlug',
  Description = 'description',
  Keywords = 'keywords',
  TableOfContents = 'tableOfContents',
  Excerpt = 'excerpt',
  Body = 'body',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type MdxBlogPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  globalBlogPostId?: Maybe<IdQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  banner?: Maybe<FileFilterInput>
  bannerStyle?: Maybe<BannerStyleQueryOperatorInput>
  externalLinks?: Maybe<ExternalLinksFilterInput>
  slug?: Maybe<StringQueryOperatorInput>
  langKey?: Maybe<LangKeyQueryOperatorInput>
  date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  category?: Maybe<StringQueryOperatorInput>
  categorySlug?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  keywords?: Maybe<StringQueryOperatorInput>
  tableOfContents?: Maybe<JsonQueryOperatorInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  body?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type MdxBlogPostGroupConnection = {
  __typename?: 'MdxBlogPostGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<MdxBlogPostEdge>
  nodes: Array<MdxBlogPost>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type MdxBlogPostSortInput = {
  fields?: Maybe<Array<Maybe<MdxBlogPostFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type MdxConnection = {
  __typename?: 'MdxConnection'
  totalCount: Scalars['Int']
  edges: Array<MdxEdge>
  nodes: Array<Mdx>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<MdxGroupConnection>
}

export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum
}

export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: MdxFieldsEnum
}

export type MdxEdge = {
  __typename?: 'MdxEdge'
  next?: Maybe<Mdx>
  node: Mdx
  previous?: Maybe<Mdx>
}

export enum MdxFieldsEnum {
  RawBody = 'rawBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterDescription = 'frontmatter___description',
  FrontmatterCategory = 'frontmatter___category',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterKeywords = 'frontmatter___keywords',
  FrontmatterBannerSourceInstanceName = 'frontmatter___banner___sourceInstanceName',
  FrontmatterBannerAbsolutePath = 'frontmatter___banner___absolutePath',
  FrontmatterBannerRelativePath = 'frontmatter___banner___relativePath',
  FrontmatterBannerExtension = 'frontmatter___banner___extension',
  FrontmatterBannerSize = 'frontmatter___banner___size',
  FrontmatterBannerPrettySize = 'frontmatter___banner___prettySize',
  FrontmatterBannerModifiedTime = 'frontmatter___banner___modifiedTime',
  FrontmatterBannerAccessTime = 'frontmatter___banner___accessTime',
  FrontmatterBannerChangeTime = 'frontmatter___banner___changeTime',
  FrontmatterBannerBirthTime = 'frontmatter___banner___birthTime',
  FrontmatterBannerRoot = 'frontmatter___banner___root',
  FrontmatterBannerDir = 'frontmatter___banner___dir',
  FrontmatterBannerBase = 'frontmatter___banner___base',
  FrontmatterBannerExt = 'frontmatter___banner___ext',
  FrontmatterBannerName = 'frontmatter___banner___name',
  FrontmatterBannerRelativeDirectory = 'frontmatter___banner___relativeDirectory',
  FrontmatterBannerDev = 'frontmatter___banner___dev',
  FrontmatterBannerMode = 'frontmatter___banner___mode',
  FrontmatterBannerNlink = 'frontmatter___banner___nlink',
  FrontmatterBannerUid = 'frontmatter___banner___uid',
  FrontmatterBannerGid = 'frontmatter___banner___gid',
  FrontmatterBannerRdev = 'frontmatter___banner___rdev',
  FrontmatterBannerIno = 'frontmatter___banner___ino',
  FrontmatterBannerAtimeMs = 'frontmatter___banner___atimeMs',
  FrontmatterBannerMtimeMs = 'frontmatter___banner___mtimeMs',
  FrontmatterBannerCtimeMs = 'frontmatter___banner___ctimeMs',
  FrontmatterBannerAtime = 'frontmatter___banner___atime',
  FrontmatterBannerMtime = 'frontmatter___banner___mtime',
  FrontmatterBannerCtime = 'frontmatter___banner___ctime',
  FrontmatterBannerBirthtime = 'frontmatter___banner___birthtime',
  FrontmatterBannerBirthtimeMs = 'frontmatter___banner___birthtimeMs',
  FrontmatterBannerBlksize = 'frontmatter___banner___blksize',
  FrontmatterBannerBlocks = 'frontmatter___banner___blocks',
  FrontmatterBannerPublicUrl = 'frontmatter___banner___publicURL',
  FrontmatterBannerChildImageSharpId = 'frontmatter___banner___childImageSharp___id',
  FrontmatterBannerChildImageSharpChildren = 'frontmatter___banner___childImageSharp___children',
  FrontmatterBannerId = 'frontmatter___banner___id',
  FrontmatterBannerParentId = 'frontmatter___banner___parent___id',
  FrontmatterBannerParentChildren = 'frontmatter___banner___parent___children',
  FrontmatterBannerChildren = 'frontmatter___banner___children',
  FrontmatterBannerChildrenId = 'frontmatter___banner___children___id',
  FrontmatterBannerChildrenChildren = 'frontmatter___banner___children___children',
  FrontmatterBannerInternalContent = 'frontmatter___banner___internal___content',
  FrontmatterBannerInternalContentDigest = 'frontmatter___banner___internal___contentDigest',
  FrontmatterBannerInternalDescription = 'frontmatter___banner___internal___description',
  FrontmatterBannerInternalFieldOwners = 'frontmatter___banner___internal___fieldOwners',
  FrontmatterBannerInternalIgnoreType = 'frontmatter___banner___internal___ignoreType',
  FrontmatterBannerInternalMediaType = 'frontmatter___banner___internal___mediaType',
  FrontmatterBannerInternalOwner = 'frontmatter___banner___internal___owner',
  FrontmatterBannerInternalType = 'frontmatter___banner___internal___type',
  FrontmatterBannerChildMdxRawBody = 'frontmatter___banner___childMdx___rawBody',
  FrontmatterBannerChildMdxFileAbsolutePath = 'frontmatter___banner___childMdx___fileAbsolutePath',
  FrontmatterBannerChildMdxBody = 'frontmatter___banner___childMdx___body',
  FrontmatterBannerChildMdxExcerpt = 'frontmatter___banner___childMdx___excerpt',
  FrontmatterBannerChildMdxHeadings = 'frontmatter___banner___childMdx___headings',
  FrontmatterBannerChildMdxHtml = 'frontmatter___banner___childMdx___html',
  FrontmatterBannerChildMdxMdxAst = 'frontmatter___banner___childMdx___mdxAST',
  FrontmatterBannerChildMdxTableOfContents = 'frontmatter___banner___childMdx___tableOfContents',
  FrontmatterBannerChildMdxTimeToRead = 'frontmatter___banner___childMdx___timeToRead',
  FrontmatterBannerChildMdxId = 'frontmatter___banner___childMdx___id',
  FrontmatterBannerChildMdxChildren = 'frontmatter___banner___childMdx___children',
  FrontmatterBannerStyle = 'frontmatter___bannerStyle',
  FrontmatterExternalLinksCanonical = 'frontmatter___externalLinks___canonical',
  FrontmatterSlug = 'frontmatter___slug',
  Body = 'body',
  Excerpt = 'excerpt',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  Html = 'html',
  MdxAst = 'mdxAST',
  TableOfContents = 'tableOfContents',
  TimeToRead = 'timeToRead',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildMdxBlogPostId = 'childMdxBlogPost___id',
  ChildMdxBlogPostGlobalBlogPostId = 'childMdxBlogPost___globalBlogPostId',
  ChildMdxBlogPostTitle = 'childMdxBlogPost___title',
  ChildMdxBlogPostBannerSourceInstanceName = 'childMdxBlogPost___banner___sourceInstanceName',
  ChildMdxBlogPostBannerAbsolutePath = 'childMdxBlogPost___banner___absolutePath',
  ChildMdxBlogPostBannerRelativePath = 'childMdxBlogPost___banner___relativePath',
  ChildMdxBlogPostBannerExtension = 'childMdxBlogPost___banner___extension',
  ChildMdxBlogPostBannerSize = 'childMdxBlogPost___banner___size',
  ChildMdxBlogPostBannerPrettySize = 'childMdxBlogPost___banner___prettySize',
  ChildMdxBlogPostBannerModifiedTime = 'childMdxBlogPost___banner___modifiedTime',
  ChildMdxBlogPostBannerAccessTime = 'childMdxBlogPost___banner___accessTime',
  ChildMdxBlogPostBannerChangeTime = 'childMdxBlogPost___banner___changeTime',
  ChildMdxBlogPostBannerBirthTime = 'childMdxBlogPost___banner___birthTime',
  ChildMdxBlogPostBannerRoot = 'childMdxBlogPost___banner___root',
  ChildMdxBlogPostBannerDir = 'childMdxBlogPost___banner___dir',
  ChildMdxBlogPostBannerBase = 'childMdxBlogPost___banner___base',
  ChildMdxBlogPostBannerExt = 'childMdxBlogPost___banner___ext',
  ChildMdxBlogPostBannerName = 'childMdxBlogPost___banner___name',
  ChildMdxBlogPostBannerRelativeDirectory = 'childMdxBlogPost___banner___relativeDirectory',
  ChildMdxBlogPostBannerDev = 'childMdxBlogPost___banner___dev',
  ChildMdxBlogPostBannerMode = 'childMdxBlogPost___banner___mode',
  ChildMdxBlogPostBannerNlink = 'childMdxBlogPost___banner___nlink',
  ChildMdxBlogPostBannerUid = 'childMdxBlogPost___banner___uid',
  ChildMdxBlogPostBannerGid = 'childMdxBlogPost___banner___gid',
  ChildMdxBlogPostBannerRdev = 'childMdxBlogPost___banner___rdev',
  ChildMdxBlogPostBannerIno = 'childMdxBlogPost___banner___ino',
  ChildMdxBlogPostBannerAtimeMs = 'childMdxBlogPost___banner___atimeMs',
  ChildMdxBlogPostBannerMtimeMs = 'childMdxBlogPost___banner___mtimeMs',
  ChildMdxBlogPostBannerCtimeMs = 'childMdxBlogPost___banner___ctimeMs',
  ChildMdxBlogPostBannerAtime = 'childMdxBlogPost___banner___atime',
  ChildMdxBlogPostBannerMtime = 'childMdxBlogPost___banner___mtime',
  ChildMdxBlogPostBannerCtime = 'childMdxBlogPost___banner___ctime',
  ChildMdxBlogPostBannerBirthtime = 'childMdxBlogPost___banner___birthtime',
  ChildMdxBlogPostBannerBirthtimeMs = 'childMdxBlogPost___banner___birthtimeMs',
  ChildMdxBlogPostBannerBlksize = 'childMdxBlogPost___banner___blksize',
  ChildMdxBlogPostBannerBlocks = 'childMdxBlogPost___banner___blocks',
  ChildMdxBlogPostBannerPublicUrl = 'childMdxBlogPost___banner___publicURL',
  ChildMdxBlogPostBannerChildImageSharpId = 'childMdxBlogPost___banner___childImageSharp___id',
  ChildMdxBlogPostBannerChildImageSharpChildren = 'childMdxBlogPost___banner___childImageSharp___children',
  ChildMdxBlogPostBannerId = 'childMdxBlogPost___banner___id',
  ChildMdxBlogPostBannerParentId = 'childMdxBlogPost___banner___parent___id',
  ChildMdxBlogPostBannerParentChildren = 'childMdxBlogPost___banner___parent___children',
  ChildMdxBlogPostBannerChildren = 'childMdxBlogPost___banner___children',
  ChildMdxBlogPostBannerChildrenId = 'childMdxBlogPost___banner___children___id',
  ChildMdxBlogPostBannerChildrenChildren = 'childMdxBlogPost___banner___children___children',
  ChildMdxBlogPostBannerInternalContent = 'childMdxBlogPost___banner___internal___content',
  ChildMdxBlogPostBannerInternalContentDigest = 'childMdxBlogPost___banner___internal___contentDigest',
  ChildMdxBlogPostBannerInternalDescription = 'childMdxBlogPost___banner___internal___description',
  ChildMdxBlogPostBannerInternalFieldOwners = 'childMdxBlogPost___banner___internal___fieldOwners',
  ChildMdxBlogPostBannerInternalIgnoreType = 'childMdxBlogPost___banner___internal___ignoreType',
  ChildMdxBlogPostBannerInternalMediaType = 'childMdxBlogPost___banner___internal___mediaType',
  ChildMdxBlogPostBannerInternalOwner = 'childMdxBlogPost___banner___internal___owner',
  ChildMdxBlogPostBannerInternalType = 'childMdxBlogPost___banner___internal___type',
  ChildMdxBlogPostBannerChildMdxRawBody = 'childMdxBlogPost___banner___childMdx___rawBody',
  ChildMdxBlogPostBannerChildMdxFileAbsolutePath = 'childMdxBlogPost___banner___childMdx___fileAbsolutePath',
  ChildMdxBlogPostBannerChildMdxBody = 'childMdxBlogPost___banner___childMdx___body',
  ChildMdxBlogPostBannerChildMdxExcerpt = 'childMdxBlogPost___banner___childMdx___excerpt',
  ChildMdxBlogPostBannerChildMdxHeadings = 'childMdxBlogPost___banner___childMdx___headings',
  ChildMdxBlogPostBannerChildMdxHtml = 'childMdxBlogPost___banner___childMdx___html',
  ChildMdxBlogPostBannerChildMdxMdxAst = 'childMdxBlogPost___banner___childMdx___mdxAST',
  ChildMdxBlogPostBannerChildMdxTableOfContents = 'childMdxBlogPost___banner___childMdx___tableOfContents',
  ChildMdxBlogPostBannerChildMdxTimeToRead = 'childMdxBlogPost___banner___childMdx___timeToRead',
  ChildMdxBlogPostBannerChildMdxId = 'childMdxBlogPost___banner___childMdx___id',
  ChildMdxBlogPostBannerChildMdxChildren = 'childMdxBlogPost___banner___childMdx___children',
  ChildMdxBlogPostBannerStyle = 'childMdxBlogPost___bannerStyle',
  ChildMdxBlogPostExternalLinksDevto = 'childMdxBlogPost___externalLinks___devto',
  ChildMdxBlogPostExternalLinksCanonical = 'childMdxBlogPost___externalLinks___canonical',
  ChildMdxBlogPostExternalLinksGithub = 'childMdxBlogPost___externalLinks___github',
  ChildMdxBlogPostSlug = 'childMdxBlogPost___slug',
  ChildMdxBlogPostLangKey = 'childMdxBlogPost___langKey',
  ChildMdxBlogPostDate = 'childMdxBlogPost___date',
  ChildMdxBlogPostTags = 'childMdxBlogPost___tags',
  ChildMdxBlogPostCategory = 'childMdxBlogPost___category',
  ChildMdxBlogPostCategorySlug = 'childMdxBlogPost___categorySlug',
  ChildMdxBlogPostDescription = 'childMdxBlogPost___description',
  ChildMdxBlogPostKeywords = 'childMdxBlogPost___keywords',
  ChildMdxBlogPostTableOfContents = 'childMdxBlogPost___tableOfContents',
  ChildMdxBlogPostExcerpt = 'childMdxBlogPost___excerpt',
  ChildMdxBlogPostBody = 'childMdxBlogPost___body',
  ChildMdxBlogPostParentId = 'childMdxBlogPost___parent___id',
  ChildMdxBlogPostParentParentId = 'childMdxBlogPost___parent___parent___id',
  ChildMdxBlogPostParentParentChildren = 'childMdxBlogPost___parent___parent___children',
  ChildMdxBlogPostParentChildren = 'childMdxBlogPost___parent___children',
  ChildMdxBlogPostParentChildrenId = 'childMdxBlogPost___parent___children___id',
  ChildMdxBlogPostParentChildrenChildren = 'childMdxBlogPost___parent___children___children',
  ChildMdxBlogPostParentInternalContent = 'childMdxBlogPost___parent___internal___content',
  ChildMdxBlogPostParentInternalContentDigest = 'childMdxBlogPost___parent___internal___contentDigest',
  ChildMdxBlogPostParentInternalDescription = 'childMdxBlogPost___parent___internal___description',
  ChildMdxBlogPostParentInternalFieldOwners = 'childMdxBlogPost___parent___internal___fieldOwners',
  ChildMdxBlogPostParentInternalIgnoreType = 'childMdxBlogPost___parent___internal___ignoreType',
  ChildMdxBlogPostParentInternalMediaType = 'childMdxBlogPost___parent___internal___mediaType',
  ChildMdxBlogPostParentInternalOwner = 'childMdxBlogPost___parent___internal___owner',
  ChildMdxBlogPostParentInternalType = 'childMdxBlogPost___parent___internal___type',
  ChildMdxBlogPostChildren = 'childMdxBlogPost___children',
  ChildMdxBlogPostChildrenId = 'childMdxBlogPost___children___id',
  ChildMdxBlogPostChildrenParentId = 'childMdxBlogPost___children___parent___id',
  ChildMdxBlogPostChildrenParentChildren = 'childMdxBlogPost___children___parent___children',
  ChildMdxBlogPostChildrenChildren = 'childMdxBlogPost___children___children',
  ChildMdxBlogPostChildrenChildrenId = 'childMdxBlogPost___children___children___id',
  ChildMdxBlogPostChildrenChildrenChildren = 'childMdxBlogPost___children___children___children',
  ChildMdxBlogPostChildrenInternalContent = 'childMdxBlogPost___children___internal___content',
  ChildMdxBlogPostChildrenInternalContentDigest = 'childMdxBlogPost___children___internal___contentDigest',
  ChildMdxBlogPostChildrenInternalDescription = 'childMdxBlogPost___children___internal___description',
  ChildMdxBlogPostChildrenInternalFieldOwners = 'childMdxBlogPost___children___internal___fieldOwners',
  ChildMdxBlogPostChildrenInternalIgnoreType = 'childMdxBlogPost___children___internal___ignoreType',
  ChildMdxBlogPostChildrenInternalMediaType = 'childMdxBlogPost___children___internal___mediaType',
  ChildMdxBlogPostChildrenInternalOwner = 'childMdxBlogPost___children___internal___owner',
  ChildMdxBlogPostChildrenInternalType = 'childMdxBlogPost___children___internal___type',
  ChildMdxBlogPostInternalContent = 'childMdxBlogPost___internal___content',
  ChildMdxBlogPostInternalContentDigest = 'childMdxBlogPost___internal___contentDigest',
  ChildMdxBlogPostInternalDescription = 'childMdxBlogPost___internal___description',
  ChildMdxBlogPostInternalFieldOwners = 'childMdxBlogPost___internal___fieldOwners',
  ChildMdxBlogPostInternalIgnoreType = 'childMdxBlogPost___internal___ignoreType',
  ChildMdxBlogPostInternalMediaType = 'childMdxBlogPost___internal___mediaType',
  ChildMdxBlogPostInternalOwner = 'childMdxBlogPost___internal___owner',
  ChildMdxBlogPostInternalType = 'childMdxBlogPost___internal___type',
}

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>
  frontmatter?: Maybe<MdxFrontmatterFilterInput>
  body?: Maybe<StringQueryOperatorInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  headings?: Maybe<MdxHeadingMdxFilterListInput>
  html?: Maybe<StringQueryOperatorInput>
  mdxAST?: Maybe<JsonQueryOperatorInput>
  tableOfContents?: Maybe<JsonQueryOperatorInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  wordCount?: Maybe<MdxWordCountFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  childMdxBlogPost?: Maybe<MdxBlogPostFilterInput>
}

export type MdxFrontmatter = {
  __typename?: 'MdxFrontmatter'
  title: Scalars['String']
  date?: Maybe<Scalars['Date']>
  description?: Maybe<Scalars['String']>
  category?: Maybe<Scalars['String']>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
  banner?: Maybe<File>
  bannerStyle?: Maybe<Scalars['String']>
  externalLinks?: Maybe<MdxFrontmatterExternalLinks>
  slug?: Maybe<Scalars['String']>
}

export type MdxFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type MdxFrontmatterExternalLinks = {
  __typename?: 'MdxFrontmatterExternalLinks'
  canonical?: Maybe<Scalars['String']>
}

export type MdxFrontmatterExternalLinksFilterInput = {
  canonical?: Maybe<StringQueryOperatorInput>
}

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  date?: Maybe<DateQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  category?: Maybe<StringQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  keywords?: Maybe<StringQueryOperatorInput>
  banner?: Maybe<FileFilterInput>
  bannerStyle?: Maybe<StringQueryOperatorInput>
  externalLinks?: Maybe<MdxFrontmatterExternalLinksFilterInput>
  slug?: Maybe<StringQueryOperatorInput>
}

export type MdxGroupConnection = {
  __typename?: 'MdxGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<MdxEdge>
  nodes: Array<Mdx>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type MdxHeadingMdx = {
  __typename?: 'MdxHeadingMdx'
  value?: Maybe<Scalars['String']>
  depth?: Maybe<Scalars['Int']>
}

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>
  depth?: Maybe<IntQueryOperatorInput>
}

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>
}

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type MdxWordCount = {
  __typename?: 'MdxWordCount'
  paragraphs?: Maybe<Scalars['Int']>
  sentences?: Maybe<Scalars['Int']>
  words?: Maybe<Scalars['Int']>
}

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>
  sentences?: Maybe<IntQueryOperatorInput>
  words?: Maybe<IntQueryOperatorInput>
}

/** Node Interface */
export type Node = {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  currentPage: Scalars['Int']
  hasPreviousPage: Scalars['Boolean']
  hasNextPage: Scalars['Boolean']
  itemCount: Scalars['Int']
  pageCount: Scalars['Int']
  perPage?: Maybe<Scalars['Int']>
  totalCount: Scalars['Int']
}

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>
  turdSize?: Maybe<Scalars['Float']>
  alphaMax?: Maybe<Scalars['Float']>
  optCurve?: Maybe<Scalars['Boolean']>
  optTolerance?: Maybe<Scalars['Float']>
  threshold?: Maybe<Scalars['Int']>
  blackOnWhite?: Maybe<Scalars['Boolean']>
  color?: Maybe<Scalars['String']>
  background?: Maybe<Scalars['String']>
}

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
}

export type Query = {
  __typename?: 'Query'
  blogPost?: Maybe<BlogPost>
  allBlogPost: BlogPostConnection
  file?: Maybe<File>
  allFile: FileConnection
  directory?: Maybe<Directory>
  allDirectory: DirectoryConnection
  sitePage?: Maybe<SitePage>
  allSitePage: SitePageConnection
  site?: Maybe<Site>
  allSite: SiteConnection
  imageSharp?: Maybe<ImageSharp>
  allImageSharp: ImageSharpConnection
  mdx?: Maybe<Mdx>
  allMdx: MdxConnection
  mdxBlogPost?: Maybe<MdxBlogPost>
  allMdxBlogPost: MdxBlogPostConnection
  siteBuildMetadata?: Maybe<SiteBuildMetadata>
  allSiteBuildMetadata: SiteBuildMetadataConnection
  sitePlugin?: Maybe<SitePlugin>
  allSitePlugin: SitePluginConnection
}

export type QueryBlogPostArgs = {
  id?: Maybe<StringQueryOperatorInput>
  globalBlogPostId?: Maybe<IdQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  body?: Maybe<StringQueryOperatorInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  banner?: Maybe<FileFilterInput>
  bannerStyle?: Maybe<BannerStyleQueryOperatorInput>
  externalLinks?: Maybe<ExternalLinksFilterInput>
  slug?: Maybe<StringQueryOperatorInput>
  langKey?: Maybe<LangKeyQueryOperatorInput>
  date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  category?: Maybe<StringQueryOperatorInput>
  categorySlug?: Maybe<StringQueryOperatorInput>
  tableOfContents?: Maybe<JsonQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  keywords?: Maybe<StringQueryOperatorInput>
}

export type QueryAllBlogPostArgs = {
  filter?: Maybe<BlogPostFilterInput>
  sort?: Maybe<BlogPostSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  childMdx?: Maybe<MdxFilterInput>
}

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>
  sort?: Maybe<FileSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>
  sort?: Maybe<DirectorySortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>
  sort?: Maybe<SitePageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>
  sort?: Maybe<SiteSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  sizes?: Maybe<ImageSharpSizesFilterInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>
  sort?: Maybe<ImageSharpSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>
  frontmatter?: Maybe<MdxFrontmatterFilterInput>
  body?: Maybe<StringQueryOperatorInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  headings?: Maybe<MdxHeadingMdxFilterListInput>
  html?: Maybe<StringQueryOperatorInput>
  mdxAST?: Maybe<JsonQueryOperatorInput>
  tableOfContents?: Maybe<JsonQueryOperatorInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  wordCount?: Maybe<MdxWordCountFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  childMdxBlogPost?: Maybe<MdxBlogPostFilterInput>
}

export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>
  sort?: Maybe<MdxSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryMdxBlogPostArgs = {
  id?: Maybe<StringQueryOperatorInput>
  globalBlogPostId?: Maybe<IdQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  banner?: Maybe<FileFilterInput>
  bannerStyle?: Maybe<BannerStyleQueryOperatorInput>
  externalLinks?: Maybe<ExternalLinksFilterInput>
  slug?: Maybe<StringQueryOperatorInput>
  langKey?: Maybe<LangKeyQueryOperatorInput>
  date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  category?: Maybe<StringQueryOperatorInput>
  categorySlug?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  keywords?: Maybe<StringQueryOperatorInput>
  tableOfContents?: Maybe<JsonQueryOperatorInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  body?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllMdxBlogPostArgs = {
  filter?: Maybe<MdxBlogPostFilterInput>
  sort?: Maybe<MdxBlogPostSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>
  sort?: Maybe<SiteBuildMetadataSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>
  sort?: Maybe<SitePluginSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type Site = Node & {
  __typename?: 'Site'
  buildTime?: Maybe<Scalars['Date']>
  siteMetadata?: Maybe<SiteSiteMetadata>
  port?: Maybe<Scalars['Int']>
  host?: Maybe<Scalars['String']>
  pathPrefix?: Maybe<Scalars['String']>
  polyfill?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  buildTime?: Maybe<Scalars['Date']>
}

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteBuildMetadataGroupConnection>
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge'
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime',
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteConnection = {
  __typename?: 'SiteConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteFieldsEnum
}

export type SiteEdge = {
  __typename?: 'SiteEdge'
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataGithubRepoUrl = 'siteMetadata___githubRepoUrl',
  SiteMetadataAuthor = 'siteMetadata___author',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataKeywords = 'siteMetadata___keywords',
  SiteMetadataLocaleDefaultLangKey = 'siteMetadata___locale___defaultLangKey',
  SiteMetadataLocaleSupportedLanguagesEn = 'siteMetadata___locale___supportedLanguages___en',
  SiteMetadataLocaleSupportedLanguagesPtBr = 'siteMetadata___locale___supportedLanguages___pt_br',
  Port = 'port',
  Host = 'host',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePage = Node & {
  __typename?: 'SitePage'
  path: Scalars['String']
  component: Scalars['String']
  internalComponentName: Scalars['String']
  componentChunkName: Scalars['String']
  matchPath?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>
  context?: Maybe<SitePageContext>
  pluginCreator?: Maybe<SitePlugin>
  pluginCreatorId?: Maybe<Scalars['String']>
  componentPath?: Maybe<Scalars['String']>
}

export type SitePageConnection = {
  __typename?: 'SitePageConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePageFieldsEnum
}

export type SitePageContext = {
  __typename?: 'SitePageContext'
  page?: Maybe<Array<Maybe<Scalars['String']>>>
  pagination?: Maybe<SitePageContextPagination>
  categories?: Maybe<Array<Maybe<SitePageContextCategories>>>
  langKey?: Maybe<Scalars['String']>
  langKeySlug?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  globalBlogPostId?: Maybe<Scalars['String']>
  activeCategory?: Maybe<SitePageContextActiveCategory>
  postsOnCategory?: Maybe<Array<Maybe<SitePageContextPostsOnCategory>>>
  categoriesByCategorySlug?: Maybe<SitePageContextCategoriesByCategorySlug>
  tag?: Maybe<Scalars['String']>
  tags?: Maybe<Array<Maybe<SitePageContextTags>>>
}

export type SitePageContextActiveCategory = {
  __typename?: 'SitePageContextActiveCategory'
  category?: Maybe<Scalars['String']>
  categorySlug?: Maybe<Scalars['String']>
}

export type SitePageContextActiveCategoryFilterInput = {
  category?: Maybe<StringQueryOperatorInput>
  categorySlug?: Maybe<StringQueryOperatorInput>
}

export type SitePageContextCategories = {
  __typename?: 'SitePageContextCategories'
  category?: Maybe<Scalars['String']>
  categorySlug?: Maybe<Scalars['String']>
}

export type SitePageContextCategoriesByCategorySlug = {
  __typename?: 'SitePageContextCategoriesByCategorySlug'
  programming?: Maybe<SitePageContextCategoriesByCategorySlugProgramming>
  programacao?: Maybe<SitePageContextCategoriesByCategorySlugProgramacao>
}

export type SitePageContextCategoriesByCategorySlugFilterInput = {
  programming?: Maybe<SitePageContextCategoriesByCategorySlugProgrammingFilterInput>
  programacao?: Maybe<SitePageContextCategoriesByCategorySlugProgramacaoFilterInput>
}

export type SitePageContextCategoriesByCategorySlugProgramacao = {
  __typename?: 'SitePageContextCategoriesByCategorySlugProgramacao'
  category?: Maybe<Scalars['String']>
  categorySlug?: Maybe<Scalars['String']>
}

export type SitePageContextCategoriesByCategorySlugProgramacaoFilterInput = {
  category?: Maybe<StringQueryOperatorInput>
  categorySlug?: Maybe<StringQueryOperatorInput>
}

export type SitePageContextCategoriesByCategorySlugProgramming = {
  __typename?: 'SitePageContextCategoriesByCategorySlugProgramming'
  category?: Maybe<Scalars['String']>
  categorySlug?: Maybe<Scalars['String']>
}

export type SitePageContextCategoriesByCategorySlugProgrammingFilterInput = {
  category?: Maybe<StringQueryOperatorInput>
  categorySlug?: Maybe<StringQueryOperatorInput>
}

export type SitePageContextCategoriesFilterInput = {
  category?: Maybe<StringQueryOperatorInput>
  categorySlug?: Maybe<StringQueryOperatorInput>
}

export type SitePageContextCategoriesFilterListInput = {
  elemMatch?: Maybe<SitePageContextCategoriesFilterInput>
}

export type SitePageContextFilterInput = {
  page?: Maybe<StringQueryOperatorInput>
  pagination?: Maybe<SitePageContextPaginationFilterInput>
  categories?: Maybe<SitePageContextCategoriesFilterListInput>
  langKey?: Maybe<StringQueryOperatorInput>
  langKeySlug?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  globalBlogPostId?: Maybe<StringQueryOperatorInput>
  activeCategory?: Maybe<SitePageContextActiveCategoryFilterInput>
  postsOnCategory?: Maybe<SitePageContextPostsOnCategoryFilterListInput>
  categoriesByCategorySlug?: Maybe<SitePageContextCategoriesByCategorySlugFilterInput>
  tag?: Maybe<StringQueryOperatorInput>
  tags?: Maybe<SitePageContextTagsFilterListInput>
}

export type SitePageContextPagination = {
  __typename?: 'SitePageContextPagination'
  page?: Maybe<Array<Maybe<Scalars['String']>>>
  pageCount?: Maybe<Scalars['Int']>
  pathPrefix?: Maybe<Scalars['String']>
  totalCount?: Maybe<Scalars['Int']>
}

export type SitePageContextPaginationFilterInput = {
  page?: Maybe<StringQueryOperatorInput>
  pageCount?: Maybe<IntQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  totalCount?: Maybe<IntQueryOperatorInput>
}

export type SitePageContextPostsOnCategory = {
  __typename?: 'SitePageContextPostsOnCategory'
  id?: Maybe<Scalars['String']>
  excerpt?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  langKey?: Maybe<Scalars['String']>
  category?: Maybe<Scalars['String']>
  categorySlug?: Maybe<Scalars['String']>
  globalBlogPostId?: Maybe<Scalars['String']>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  body?: Maybe<Scalars['String']>
}

export type SitePageContextPostsOnCategoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  langKey?: Maybe<StringQueryOperatorInput>
  category?: Maybe<StringQueryOperatorInput>
  categorySlug?: Maybe<StringQueryOperatorInput>
  globalBlogPostId?: Maybe<StringQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  body?: Maybe<StringQueryOperatorInput>
}

export type SitePageContextPostsOnCategoryFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostsOnCategoryFilterInput>
}

export type SitePageContextTags = {
  __typename?: 'SitePageContextTags'
  tag?: Maybe<Scalars['String']>
  langKey?: Maybe<Scalars['String']>
  articlesCount?: Maybe<Scalars['Int']>
}

export type SitePageContextTagsFilterInput = {
  tag?: Maybe<StringQueryOperatorInput>
  langKey?: Maybe<StringQueryOperatorInput>
  articlesCount?: Maybe<IntQueryOperatorInput>
}

export type SitePageContextTagsFilterListInput = {
  elemMatch?: Maybe<SitePageContextTagsFilterInput>
}

export type SitePageEdge = {
  __typename?: 'SitePageEdge'
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextPage = 'context___page',
  ContextPaginationPage = 'context___pagination___page',
  ContextPaginationPageCount = 'context___pagination___pageCount',
  ContextPaginationPathPrefix = 'context___pagination___pathPrefix',
  ContextPaginationTotalCount = 'context___pagination___totalCount',
  ContextCategories = 'context___categories',
  ContextCategoriesCategory = 'context___categories___category',
  ContextCategoriesCategorySlug = 'context___categories___categorySlug',
  ContextLangKey = 'context___langKey',
  ContextLangKeySlug = 'context___langKeySlug',
  ContextId = 'context___id',
  ContextGlobalBlogPostId = 'context___globalBlogPostId',
  ContextActiveCategoryCategory = 'context___activeCategory___category',
  ContextActiveCategoryCategorySlug = 'context___activeCategory___categorySlug',
  ContextPostsOnCategory = 'context___postsOnCategory',
  ContextPostsOnCategoryId = 'context___postsOnCategory___id',
  ContextPostsOnCategoryExcerpt = 'context___postsOnCategory___excerpt',
  ContextPostsOnCategoryTitle = 'context___postsOnCategory___title',
  ContextPostsOnCategorySlug = 'context___postsOnCategory___slug',
  ContextPostsOnCategoryLangKey = 'context___postsOnCategory___langKey',
  ContextPostsOnCategoryCategory = 'context___postsOnCategory___category',
  ContextPostsOnCategoryCategorySlug = 'context___postsOnCategory___categorySlug',
  ContextPostsOnCategoryGlobalBlogPostId = 'context___postsOnCategory___globalBlogPostId',
  ContextPostsOnCategoryTags = 'context___postsOnCategory___tags',
  ContextPostsOnCategoryBody = 'context___postsOnCategory___body',
  ContextCategoriesByCategorySlugProgrammingCategory = 'context___categoriesByCategorySlug___programming___category',
  ContextCategoriesByCategorySlugProgrammingCategorySlug = 'context___categoriesByCategorySlug___programming___categorySlug',
  ContextCategoriesByCategorySlugProgramacaoCategory = 'context___categoriesByCategorySlug___programacao___category',
  ContextCategoriesByCategorySlugProgramacaoCategorySlug = 'context___categoriesByCategorySlug___programacao___categorySlug',
  ContextTag = 'context___tag',
  ContextTags = 'context___tags',
  ContextTagsTag = 'context___tags___tag',
  ContextTagsLangKey = 'context___tags___langKey',
  ContextTagsArticlesCount = 'context___tags___articlesCount',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsExtensions = 'pluginCreator___pluginOptions___extensions',
  PluginCreatorPluginOptionsGatsbyRemarkPlugins = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins',
  PluginCreatorPluginOptionsGatsbyRemarkPluginsResolve = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve',
  PluginCreatorPluginOptionsRemarkPlugins = 'pluginCreator___pluginOptions___remarkPlugins',
  PluginCreatorPluginOptionsRehypePlugins = 'pluginCreator___pluginOptions___rehypePlugins',
  PluginCreatorPluginOptionsRehypePluginsBehavior = 'pluginCreator___pluginOptions___rehypePlugins___behavior',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsCacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  PluginCreatorPluginOptionsGoogleFamilies = 'pluginCreator___pluginOptions___google___families',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  __typename?: 'SitePlugin'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  resolve?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<SitePluginPluginOptions>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath?: Maybe<Scalars['String']>
  packageJson?: Maybe<SitePluginPackageJson>
}

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge'
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsExtensions = 'pluginOptions___extensions',
  PluginOptionsGatsbyRemarkPlugins = 'pluginOptions___gatsbyRemarkPlugins',
  PluginOptionsGatsbyRemarkPluginsResolve = 'pluginOptions___gatsbyRemarkPlugins___resolve',
  PluginOptionsGatsbyRemarkPluginsOptionsMaxWidth = 'pluginOptions___gatsbyRemarkPlugins___options___maxWidth',
  PluginOptionsGatsbyRemarkPluginsOptionsPathPrefix = 'pluginOptions___gatsbyRemarkPlugins___options___pathPrefix',
  PluginOptionsGatsbyRemarkPluginsOptionsWrapperStyle = 'pluginOptions___gatsbyRemarkPlugins___options___wrapperStyle',
  PluginOptionsGatsbyRemarkPluginsOptionsBackgroundColor = 'pluginOptions___gatsbyRemarkPlugins___options___backgroundColor',
  PluginOptionsGatsbyRemarkPluginsOptionsLinkImagesToOriginal = 'pluginOptions___gatsbyRemarkPlugins___options___linkImagesToOriginal',
  PluginOptionsGatsbyRemarkPluginsOptionsShowCaptions = 'pluginOptions___gatsbyRemarkPlugins___options___showCaptions',
  PluginOptionsGatsbyRemarkPluginsOptionsMarkdownCaptions = 'pluginOptions___gatsbyRemarkPlugins___options___markdownCaptions',
  PluginOptionsGatsbyRemarkPluginsOptionsWithWebp = 'pluginOptions___gatsbyRemarkPlugins___options___withWebp',
  PluginOptionsGatsbyRemarkPluginsOptionsTracedSvg = 'pluginOptions___gatsbyRemarkPlugins___options___tracedSVG',
  PluginOptionsGatsbyRemarkPluginsOptionsLoading = 'pluginOptions___gatsbyRemarkPlugins___options___loading',
  PluginOptionsGatsbyRemarkPluginsOptionsDisableBgImageOnAlpha = 'pluginOptions___gatsbyRemarkPlugins___options___disableBgImageOnAlpha',
  PluginOptionsGatsbyRemarkPluginsOptionsDisableBgImage = 'pluginOptions___gatsbyRemarkPlugins___options___disableBgImage',
  PluginOptionsGatsbyRemarkPluginsOptionsClassPrefix = 'pluginOptions___gatsbyRemarkPlugins___options___classPrefix',
  PluginOptionsGatsbyRemarkPluginsOptionsInlineCodeMarker = 'pluginOptions___gatsbyRemarkPlugins___options___inlineCodeMarker',
  PluginOptionsRemarkPlugins = 'pluginOptions___remarkPlugins',
  PluginOptionsRemarkPluginsExternalTable = 'pluginOptions___remarkPlugins___external___table',
  PluginOptionsRemarkPluginsExternalCode = 'pluginOptions___remarkPlugins___external___code',
  PluginOptionsRemarkPluginsInternalBlockquote = 'pluginOptions___remarkPlugins___internal___blockquote',
  PluginOptionsRemarkPluginsInternalImage = 'pluginOptions___remarkPlugins___internal___image',
  PluginOptionsRehypePlugins = 'pluginOptions___rehypePlugins',
  PluginOptionsRehypePluginsBehavior = 'pluginOptions___rehypePlugins___behavior',
  PluginOptionsRehypePluginsContentType = 'pluginOptions___rehypePlugins___content___type',
  PluginOptionsRehypePluginsContentTagName = 'pluginOptions___rehypePlugins___content___tagName',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsCacheDigest = 'pluginOptions___cacheDigest',
  PluginOptionsGoogleFamilies = 'pluginOptions___google___families',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson'
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  main?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  license?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  main?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  license?: Maybe<StringQueryOperatorInput>
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  keywords?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions'
  isTSX?: Maybe<Scalars['Boolean']>
  allExtensions?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>
  gatsbyRemarkPlugins?: Maybe<Array<Maybe<SitePluginPluginOptionsGatsbyRemarkPlugins>>>
  remarkPlugins?: Maybe<Array<Maybe<Array<Maybe<SitePluginPluginOptionsRemarkPlugins>>>>>
  rehypePlugins?: Maybe<Array<Maybe<Array<Maybe<SitePluginPluginOptionsRehypePlugins>>>>>
  short_name?: Maybe<Scalars['String']>
  start_url?: Maybe<Scalars['String']>
  background_color?: Maybe<Scalars['String']>
  theme_color?: Maybe<Scalars['String']>
  display?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  cache_busting_mode?: Maybe<Scalars['String']>
  include_favicon?: Maybe<Scalars['Boolean']>
  legacy?: Maybe<Scalars['Boolean']>
  theme_color_in_head?: Maybe<Scalars['Boolean']>
  cacheDigest?: Maybe<Scalars['String']>
  google?: Maybe<SitePluginPluginOptionsGoogle>
  pathCheck?: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsFilterInput = {
  isTSX?: Maybe<BooleanQueryOperatorInput>
  allExtensions?: Maybe<BooleanQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  extensions?: Maybe<StringQueryOperatorInput>
  gatsbyRemarkPlugins?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput>
  remarkPlugins?: Maybe<SitePluginPluginOptionsRemarkPluginsFilterListInput>
  rehypePlugins?: Maybe<SitePluginPluginOptionsRehypePluginsFilterListInput>
  short_name?: Maybe<StringQueryOperatorInput>
  start_url?: Maybe<StringQueryOperatorInput>
  background_color?: Maybe<StringQueryOperatorInput>
  theme_color?: Maybe<StringQueryOperatorInput>
  display?: Maybe<StringQueryOperatorInput>
  icon?: Maybe<StringQueryOperatorInput>
  cache_busting_mode?: Maybe<StringQueryOperatorInput>
  include_favicon?: Maybe<BooleanQueryOperatorInput>
  legacy?: Maybe<BooleanQueryOperatorInput>
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>
  cacheDigest?: Maybe<StringQueryOperatorInput>
  google?: Maybe<SitePluginPluginOptionsGoogleFilterInput>
  pathCheck?: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginPluginOptionsGatsbyRemarkPlugins = {
  __typename?: 'SitePluginPluginOptionsGatsbyRemarkPlugins'
  resolve?: Maybe<Scalars['String']>
  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptions>
}

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>
  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput>
}

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput>
}

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptions = {
  __typename?: 'SitePluginPluginOptionsGatsbyRemarkPluginsOptions'
  maxWidth?: Maybe<Scalars['Int']>
  pathPrefix?: Maybe<Scalars['String']>
  wrapperStyle?: Maybe<Scalars['String']>
  backgroundColor?: Maybe<Scalars['String']>
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>
  showCaptions?: Maybe<Scalars['Boolean']>
  markdownCaptions?: Maybe<Scalars['Boolean']>
  withWebp?: Maybe<Scalars['Boolean']>
  tracedSVG?: Maybe<Scalars['Boolean']>
  loading?: Maybe<Scalars['String']>
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>
  disableBgImage?: Maybe<Scalars['Boolean']>
  classPrefix?: Maybe<Scalars['String']>
  inlineCodeMarker?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  wrapperStyle?: Maybe<StringQueryOperatorInput>
  backgroundColor?: Maybe<StringQueryOperatorInput>
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>
  showCaptions?: Maybe<BooleanQueryOperatorInput>
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>
  withWebp?: Maybe<BooleanQueryOperatorInput>
  tracedSVG?: Maybe<BooleanQueryOperatorInput>
  loading?: Maybe<StringQueryOperatorInput>
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>
  disableBgImage?: Maybe<BooleanQueryOperatorInput>
  classPrefix?: Maybe<StringQueryOperatorInput>
  inlineCodeMarker?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsGoogle = {
  __typename?: 'SitePluginPluginOptionsGoogle'
  families?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPluginOptionsGoogleFilterInput = {
  families?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsRehypePlugins = {
  __typename?: 'SitePluginPluginOptionsRehypePlugins'
  behavior?: Maybe<Scalars['String']>
  content?: Maybe<SitePluginPluginOptionsRehypePluginsContent>
}

export type SitePluginPluginOptionsRehypePluginsContent = {
  __typename?: 'SitePluginPluginOptionsRehypePluginsContent'
  type?: Maybe<Scalars['String']>
  tagName?: Maybe<Scalars['String']>
  properties?: Maybe<SitePluginPluginOptionsRehypePluginsContentProperties>
}

export type SitePluginPluginOptionsRehypePluginsContentFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  tagName?: Maybe<StringQueryOperatorInput>
  properties?: Maybe<SitePluginPluginOptionsRehypePluginsContentPropertiesFilterInput>
}

export type SitePluginPluginOptionsRehypePluginsContentProperties = {
  __typename?: 'SitePluginPluginOptionsRehypePluginsContentProperties'
  className?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsRehypePluginsContentPropertiesFilterInput = {
  className?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsRehypePluginsFilterInput = {
  behavior?: Maybe<StringQueryOperatorInput>
  content?: Maybe<SitePluginPluginOptionsRehypePluginsContentFilterInput>
}

export type SitePluginPluginOptionsRehypePluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsRehypePluginsFilterInput>
}

export type SitePluginPluginOptionsRemarkPlugins = {
  __typename?: 'SitePluginPluginOptionsRemarkPlugins'
  external?: Maybe<SitePluginPluginOptionsRemarkPluginsExternal>
  internal?: Maybe<SitePluginPluginOptionsRemarkPluginsInternal>
}

export type SitePluginPluginOptionsRemarkPluginsExternal = {
  __typename?: 'SitePluginPluginOptionsRemarkPluginsExternal'
  table?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsRemarkPluginsExternalFilterInput = {
  table?: Maybe<StringQueryOperatorInput>
  code?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsRemarkPluginsFilterInput = {
  external?: Maybe<SitePluginPluginOptionsRemarkPluginsExternalFilterInput>
  internal?: Maybe<SitePluginPluginOptionsRemarkPluginsInternalFilterInput>
}

export type SitePluginPluginOptionsRemarkPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsRemarkPluginsFilterInput>
}

export type SitePluginPluginOptionsRemarkPluginsInternal = {
  __typename?: 'SitePluginPluginOptionsRemarkPluginsInternal'
  blockquote?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsRemarkPluginsInternalFilterInput = {
  blockquote?: Maybe<StringQueryOperatorInput>
  image?: Maybe<StringQueryOperatorInput>
}

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata'
  siteUrl?: Maybe<Scalars['String']>
  githubRepoUrl?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
  locale?: Maybe<SiteSiteMetadataLocale>
}

export type SiteSiteMetadataFilterInput = {
  siteUrl?: Maybe<StringQueryOperatorInput>
  githubRepoUrl?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  keywords?: Maybe<StringQueryOperatorInput>
  locale?: Maybe<SiteSiteMetadataLocaleFilterInput>
}

export type SiteSiteMetadataLocale = {
  __typename?: 'SiteSiteMetadataLocale'
  defaultLangKey?: Maybe<Scalars['String']>
  supportedLanguages?: Maybe<SiteSiteMetadataLocaleSupportedLanguages>
}

export type SiteSiteMetadataLocaleFilterInput = {
  defaultLangKey?: Maybe<StringQueryOperatorInput>
  supportedLanguages?: Maybe<SiteSiteMetadataLocaleSupportedLanguagesFilterInput>
}

export type SiteSiteMetadataLocaleSupportedLanguages = {
  __typename?: 'SiteSiteMetadataLocaleSupportedLanguages'
  en?: Maybe<Scalars['String']>
  pt_br?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataLocaleSupportedLanguagesFilterInput = {
  en?: Maybe<StringQueryOperatorInput>
  pt_br?: Maybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>
  ne?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  regex?: Maybe<Scalars['String']>
  glob?: Maybe<Scalars['String']>
}

export type GatsbyImageSharpFixed = { __typename?: 'ImageSharpFixed' } & Pick<
  ImageSharpFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpFixed_TracedSvg = { __typename?: 'ImageSharpFixed' } & Pick<
  ImageSharpFixed,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpFixed_WithWebp = { __typename?: 'ImageSharpFixed' } & Pick<
  ImageSharpFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFixed_WithWebp_TracedSvg = {
  __typename?: 'ImageSharpFixed'
} & Pick<
  ImageSharpFixed,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFixed_NoBase64 = { __typename?: 'ImageSharpFixed' } & Pick<
  ImageSharpFixed,
  'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpFixed_WithWebp_NoBase64 = {
  __typename?: 'ImageSharpFixed'
} & Pick<
  ImageSharpFixed,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFluid = { __typename?: 'ImageSharpFluid' } & Pick<
  ImageSharpFluid,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpFluidLimitPresentationSize = {
  __typename?: 'ImageSharpFluid'
} & {
  maxHeight: ImageSharpFluid['presentationHeight']
  maxWidth: ImageSharpFluid['presentationWidth']
}

export type GatsbyImageSharpFluid_TracedSvg = { __typename?: 'ImageSharpFluid' } & Pick<
  ImageSharpFluid,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpFluid_WithWebp = { __typename?: 'ImageSharpFluid' } & Pick<
  ImageSharpFluid,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type GatsbyImageSharpFluid_WithWebp_TracedSvg = {
  __typename?: 'ImageSharpFluid'
} & Pick<
  ImageSharpFluid,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type GatsbyImageSharpFluid_NoBase64 = { __typename?: 'ImageSharpFluid' } & Pick<
  ImageSharpFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpFluid_WithWebp_NoBase64 = {
  __typename?: 'ImageSharpFluid'
} & Pick<
  ImageSharpFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type GatsbyImageSharpResolutions = { __typename?: 'ImageSharpResolutions' } & Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpResolutions_TracedSvg = {
  __typename?: 'ImageSharpResolutions'
} & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpResolutions_WithWebp = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpResolutions_WithWebp_TracedSvg = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpResolutions_NoBase64 = {
  __typename?: 'ImageSharpResolutions'
} & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpResolutions_WithWebp_NoBase64 = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpSizes = { __typename?: 'ImageSharpSizes' } & Pick<
  ImageSharpSizes,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpSizes_TracedSvg = { __typename?: 'ImageSharpSizes' } & Pick<
  ImageSharpSizes,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpSizes_WithWebp = { __typename?: 'ImageSharpSizes' } & Pick<
  ImageSharpSizes,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type GatsbyImageSharpSizes_WithWebp_TracedSvg = {
  __typename?: 'ImageSharpSizes'
} & Pick<
  ImageSharpSizes,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type GatsbyImageSharpSizes_NoBase64 = { __typename?: 'ImageSharpSizes' } & Pick<
  ImageSharpSizes,
  'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpSizes_WithWebp_NoBase64 = {
  __typename?: 'ImageSharpSizes'
} & Pick<
  ImageSharpSizes,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type Unnamed_1_Variables = {}

export type Unnamed_1_ = { __typename?: 'Query' } & {
  logoImage?: Maybe<
    { __typename?: 'File' } & {
      childImageSharp?: Maybe<
        { __typename?: 'ImageSharp' } & {
          fluid?: Maybe<{ __typename?: 'ImageSharpFluid' } & GatsbyImageSharpFluid>
        }
      >
    }
  >
}

export type DefaultSeoQueryVariables = {}

export type DefaultSeoQuery = { __typename?: 'Query' } & {
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<
        { __typename?: 'SiteSiteMetadata' } & Pick<
          SiteSiteMetadata,
          'title' | 'description' | 'author' | 'keywords'
        >
      >
    }
  >
}

export type MainLayoutQueryVariables = {}

export type MainLayoutQuery = { __typename?: 'Query' } & {
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<
        { __typename?: 'SiteSiteMetadata' } & Pick<SiteSiteMetadata, 'title'>
      >
    }
  >
}

export type IndexQueryVariables = {
  langKey: LangKey
}

export type IndexQuery = { __typename?: 'Query' } & {
  allBlogPost: { __typename?: 'BlogPostConnection' } & {
    edges: Array<
      { __typename?: 'BlogPostEdge' } & {
        node: { __typename?: 'MdxBlogPost' } & Pick<
          MdxBlogPost,
          'id' | 'description' | 'title' | 'date' | 'slug'
        >
      }
    >
  }
}

export type BlogQueryVariables = {
  page: Array<Scalars['String']>
}

export type BlogQuery = { __typename?: 'Query' } & {
  allBlogPost: { __typename?: 'BlogPostConnection' } & {
    edges: Array<
      { __typename?: 'BlogPostEdge' } & {
        node: { __typename?: 'MdxBlogPost' } & Pick<
          MdxBlogPost,
          'excerpt' | 'id' | 'title' | 'date' | 'keywords' | 'slug'
        > & {
            banner?: Maybe<
              { __typename?: 'File' } & {
                childImageSharp?: Maybe<
                  { __typename?: 'ImageSharp' } & {
                    fluid?: Maybe<
                      { __typename?: 'ImageSharpFluid' } & GatsbyImageSharpFluid
                    >
                  }
                >
              }
            >
          }
      }
    >
  }
}

export type CategoryQueryVariables = {
  langKey: LangKey
  page: Array<Scalars['String']>
}

export type CategoryQuery = { __typename?: 'Query' } & {
  allBlogPost: { __typename?: 'BlogPostConnection' } & {
    edges: Array<
      { __typename?: 'BlogPostEdge' } & {
        node: { __typename?: 'MdxBlogPost' } & Pick<
          MdxBlogPost,
          'excerpt' | 'id' | 'title' | 'date' | 'keywords' | 'slug'
        > & {
            banner?: Maybe<
              { __typename?: 'File' } & {
                childImageSharp?: Maybe<
                  { __typename?: 'ImageSharp' } & {
                    fluid?: Maybe<
                      { __typename?: 'ImageSharpFluid' } & GatsbyImageSharpFluid
                    >
                  }
                >
              }
            >
          }
      }
    >
  }
}

export type Unnamed_2_Variables = {
  id: Scalars['String']
  globalBlogPostId: Scalars['ID']
  langKeySlug: Scalars['String']
}

export type Unnamed_2_ = { __typename?: 'Query' } & {
  postInOtherLanguages: { __typename?: 'BlogPostConnection' } & {
    languages: Array<
      { __typename?: 'BlogPostGroupConnection' } & Pick<
        BlogPostGroupConnection,
        'fieldValue'
      >
    >
    edges: Array<
      { __typename?: 'BlogPostEdge' } & {
        node: { __typename?: 'MdxBlogPost' } & Pick<
          MdxBlogPost,
          'id' | 'title' | 'slug' | 'langKey'
        >
      }
    >
  }
  blogPost?: Maybe<
    { __typename?: 'MdxBlogPost' } & Pick<
      MdxBlogPost,
      | 'title'
      | 'date'
      | 'bannerStyle'
      | 'tableOfContents'
      | 'keywords'
      | 'description'
      | 'slug'
      | 'category'
      | 'categorySlug'
      | 'globalBlogPostId'
      | 'tags'
      | 'body'
    > & { dateISOString: MdxBlogPost['date'] } & {
        banner?: Maybe<
          { __typename?: 'File' } & {
            childImageSharp?: Maybe<
              { __typename?: 'ImageSharp' } & {
                sizes?: Maybe<{ __typename?: 'ImageSharpSizes' } & GatsbyImageSharpSizes>
              }
            >
          }
        >
        externalLinks: { __typename?: 'ExternalLinks' } & Pick<
          ExternalLinks,
          'devto' | 'github' | 'canonical'
        >
      }
  >
}

export type TagQueryVariables = {
  langKey: LangKey
  tag: Scalars['String']
}

export type TagQuery = { __typename?: 'Query' } & {
  allBlogPost: { __typename?: 'BlogPostConnection' } & {
    edges: Array<
      { __typename?: 'BlogPostEdge' } & {
        node: { __typename?: 'MdxBlogPost' } & Pick<
          MdxBlogPost,
          'excerpt' | 'id' | 'title' | 'date' | 'keywords' | 'slug'
        > & {
            banner?: Maybe<
              { __typename?: 'File' } & {
                childImageSharp?: Maybe<
                  { __typename?: 'ImageSharp' } & {
                    fluid?: Maybe<
                      { __typename?: 'ImageSharpFluid' } & GatsbyImageSharpFluid
                    >
                  }
                >
              }
            >
          }
      }
    >
  }
}
