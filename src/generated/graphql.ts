export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
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
  FULL_WIDTH = 'FULL_WIDTH',
  NORMAL = 'NORMAL',
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
  hasNonDefaultSocialImageUrl: Scalars['Boolean']
  socialImageUrl: Scalars['String']
  isDraft: Scalars['Boolean']
  reviewers: Array<Person>
  externalLinks: ExternalLinks
  slug: Scalars['String']
  langKey: LangKey
  publisher?: Maybe<Publisher>
  date: Scalars['Date']
  dateModified: Scalars['Date']
  tags: Array<Scalars['String']>
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

export type BlogPostDateModifiedArgs = {
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
  id = 'id',
  globalBlogPostId = 'globalBlogPostId',
  title = 'title',
  body = 'body',
  excerpt = 'excerpt',
  banner___sourceInstanceName = 'banner___sourceInstanceName',
  banner___absolutePath = 'banner___absolutePath',
  banner___relativePath = 'banner___relativePath',
  banner___extension = 'banner___extension',
  banner___size = 'banner___size',
  banner___prettySize = 'banner___prettySize',
  banner___modifiedTime = 'banner___modifiedTime',
  banner___accessTime = 'banner___accessTime',
  banner___changeTime = 'banner___changeTime',
  banner___birthTime = 'banner___birthTime',
  banner___root = 'banner___root',
  banner___dir = 'banner___dir',
  banner___base = 'banner___base',
  banner___ext = 'banner___ext',
  banner___name = 'banner___name',
  banner___relativeDirectory = 'banner___relativeDirectory',
  banner___dev = 'banner___dev',
  banner___mode = 'banner___mode',
  banner___nlink = 'banner___nlink',
  banner___uid = 'banner___uid',
  banner___gid = 'banner___gid',
  banner___rdev = 'banner___rdev',
  banner___ino = 'banner___ino',
  banner___atimeMs = 'banner___atimeMs',
  banner___mtimeMs = 'banner___mtimeMs',
  banner___ctimeMs = 'banner___ctimeMs',
  banner___atime = 'banner___atime',
  banner___mtime = 'banner___mtime',
  banner___ctime = 'banner___ctime',
  banner___birthtime = 'banner___birthtime',
  banner___birthtimeMs = 'banner___birthtimeMs',
  banner___blksize = 'banner___blksize',
  banner___blocks = 'banner___blocks',
  banner___publicURL = 'banner___publicURL',
  banner___childImageSharp___fixed___base64 = 'banner___childImageSharp___fixed___base64',
  banner___childImageSharp___fixed___tracedSVG = 'banner___childImageSharp___fixed___tracedSVG',
  banner___childImageSharp___fixed___aspectRatio = 'banner___childImageSharp___fixed___aspectRatio',
  banner___childImageSharp___fixed___width = 'banner___childImageSharp___fixed___width',
  banner___childImageSharp___fixed___height = 'banner___childImageSharp___fixed___height',
  banner___childImageSharp___fixed___src = 'banner___childImageSharp___fixed___src',
  banner___childImageSharp___fixed___srcSet = 'banner___childImageSharp___fixed___srcSet',
  banner___childImageSharp___fixed___srcWebp = 'banner___childImageSharp___fixed___srcWebp',
  banner___childImageSharp___fixed___srcSetWebp = 'banner___childImageSharp___fixed___srcSetWebp',
  banner___childImageSharp___fixed___originalName = 'banner___childImageSharp___fixed___originalName',
  banner___childImageSharp___resolutions___base64 = 'banner___childImageSharp___resolutions___base64',
  banner___childImageSharp___resolutions___tracedSVG = 'banner___childImageSharp___resolutions___tracedSVG',
  banner___childImageSharp___resolutions___aspectRatio = 'banner___childImageSharp___resolutions___aspectRatio',
  banner___childImageSharp___resolutions___width = 'banner___childImageSharp___resolutions___width',
  banner___childImageSharp___resolutions___height = 'banner___childImageSharp___resolutions___height',
  banner___childImageSharp___resolutions___src = 'banner___childImageSharp___resolutions___src',
  banner___childImageSharp___resolutions___srcSet = 'banner___childImageSharp___resolutions___srcSet',
  banner___childImageSharp___resolutions___srcWebp = 'banner___childImageSharp___resolutions___srcWebp',
  banner___childImageSharp___resolutions___srcSetWebp = 'banner___childImageSharp___resolutions___srcSetWebp',
  banner___childImageSharp___resolutions___originalName = 'banner___childImageSharp___resolutions___originalName',
  banner___childImageSharp___fluid___base64 = 'banner___childImageSharp___fluid___base64',
  banner___childImageSharp___fluid___tracedSVG = 'banner___childImageSharp___fluid___tracedSVG',
  banner___childImageSharp___fluid___aspectRatio = 'banner___childImageSharp___fluid___aspectRatio',
  banner___childImageSharp___fluid___src = 'banner___childImageSharp___fluid___src',
  banner___childImageSharp___fluid___srcSet = 'banner___childImageSharp___fluid___srcSet',
  banner___childImageSharp___fluid___srcWebp = 'banner___childImageSharp___fluid___srcWebp',
  banner___childImageSharp___fluid___srcSetWebp = 'banner___childImageSharp___fluid___srcSetWebp',
  banner___childImageSharp___fluid___sizes = 'banner___childImageSharp___fluid___sizes',
  banner___childImageSharp___fluid___originalImg = 'banner___childImageSharp___fluid___originalImg',
  banner___childImageSharp___fluid___originalName = 'banner___childImageSharp___fluid___originalName',
  banner___childImageSharp___fluid___presentationWidth = 'banner___childImageSharp___fluid___presentationWidth',
  banner___childImageSharp___fluid___presentationHeight = 'banner___childImageSharp___fluid___presentationHeight',
  banner___childImageSharp___sizes___base64 = 'banner___childImageSharp___sizes___base64',
  banner___childImageSharp___sizes___tracedSVG = 'banner___childImageSharp___sizes___tracedSVG',
  banner___childImageSharp___sizes___aspectRatio = 'banner___childImageSharp___sizes___aspectRatio',
  banner___childImageSharp___sizes___src = 'banner___childImageSharp___sizes___src',
  banner___childImageSharp___sizes___srcSet = 'banner___childImageSharp___sizes___srcSet',
  banner___childImageSharp___sizes___srcWebp = 'banner___childImageSharp___sizes___srcWebp',
  banner___childImageSharp___sizes___srcSetWebp = 'banner___childImageSharp___sizes___srcSetWebp',
  banner___childImageSharp___sizes___sizes = 'banner___childImageSharp___sizes___sizes',
  banner___childImageSharp___sizes___originalImg = 'banner___childImageSharp___sizes___originalImg',
  banner___childImageSharp___sizes___originalName = 'banner___childImageSharp___sizes___originalName',
  banner___childImageSharp___sizes___presentationWidth = 'banner___childImageSharp___sizes___presentationWidth',
  banner___childImageSharp___sizes___presentationHeight = 'banner___childImageSharp___sizes___presentationHeight',
  banner___childImageSharp___original___width = 'banner___childImageSharp___original___width',
  banner___childImageSharp___original___height = 'banner___childImageSharp___original___height',
  banner___childImageSharp___original___src = 'banner___childImageSharp___original___src',
  banner___childImageSharp___resize___src = 'banner___childImageSharp___resize___src',
  banner___childImageSharp___resize___tracedSVG = 'banner___childImageSharp___resize___tracedSVG',
  banner___childImageSharp___resize___width = 'banner___childImageSharp___resize___width',
  banner___childImageSharp___resize___height = 'banner___childImageSharp___resize___height',
  banner___childImageSharp___resize___aspectRatio = 'banner___childImageSharp___resize___aspectRatio',
  banner___childImageSharp___resize___originalName = 'banner___childImageSharp___resize___originalName',
  banner___childImageSharp___id = 'banner___childImageSharp___id',
  banner___childImageSharp___parent___id = 'banner___childImageSharp___parent___id',
  banner___childImageSharp___parent___children = 'banner___childImageSharp___parent___children',
  banner___childImageSharp___children = 'banner___childImageSharp___children',
  banner___childImageSharp___children___id = 'banner___childImageSharp___children___id',
  banner___childImageSharp___children___children = 'banner___childImageSharp___children___children',
  banner___childImageSharp___internal___content = 'banner___childImageSharp___internal___content',
  banner___childImageSharp___internal___contentDigest = 'banner___childImageSharp___internal___contentDigest',
  banner___childImageSharp___internal___description = 'banner___childImageSharp___internal___description',
  banner___childImageSharp___internal___fieldOwners = 'banner___childImageSharp___internal___fieldOwners',
  banner___childImageSharp___internal___ignoreType = 'banner___childImageSharp___internal___ignoreType',
  banner___childImageSharp___internal___mediaType = 'banner___childImageSharp___internal___mediaType',
  banner___childImageSharp___internal___owner = 'banner___childImageSharp___internal___owner',
  banner___childImageSharp___internal___type = 'banner___childImageSharp___internal___type',
  banner___id = 'banner___id',
  banner___parent___id = 'banner___parent___id',
  banner___parent___parent___id = 'banner___parent___parent___id',
  banner___parent___parent___children = 'banner___parent___parent___children',
  banner___parent___children = 'banner___parent___children',
  banner___parent___children___id = 'banner___parent___children___id',
  banner___parent___children___children = 'banner___parent___children___children',
  banner___parent___internal___content = 'banner___parent___internal___content',
  banner___parent___internal___contentDigest = 'banner___parent___internal___contentDigest',
  banner___parent___internal___description = 'banner___parent___internal___description',
  banner___parent___internal___fieldOwners = 'banner___parent___internal___fieldOwners',
  banner___parent___internal___ignoreType = 'banner___parent___internal___ignoreType',
  banner___parent___internal___mediaType = 'banner___parent___internal___mediaType',
  banner___parent___internal___owner = 'banner___parent___internal___owner',
  banner___parent___internal___type = 'banner___parent___internal___type',
  banner___children = 'banner___children',
  banner___children___id = 'banner___children___id',
  banner___children___parent___id = 'banner___children___parent___id',
  banner___children___parent___children = 'banner___children___parent___children',
  banner___children___children = 'banner___children___children',
  banner___children___children___id = 'banner___children___children___id',
  banner___children___children___children = 'banner___children___children___children',
  banner___children___internal___content = 'banner___children___internal___content',
  banner___children___internal___contentDigest = 'banner___children___internal___contentDigest',
  banner___children___internal___description = 'banner___children___internal___description',
  banner___children___internal___fieldOwners = 'banner___children___internal___fieldOwners',
  banner___children___internal___ignoreType = 'banner___children___internal___ignoreType',
  banner___children___internal___mediaType = 'banner___children___internal___mediaType',
  banner___children___internal___owner = 'banner___children___internal___owner',
  banner___children___internal___type = 'banner___children___internal___type',
  banner___internal___content = 'banner___internal___content',
  banner___internal___contentDigest = 'banner___internal___contentDigest',
  banner___internal___description = 'banner___internal___description',
  banner___internal___fieldOwners = 'banner___internal___fieldOwners',
  banner___internal___ignoreType = 'banner___internal___ignoreType',
  banner___internal___mediaType = 'banner___internal___mediaType',
  banner___internal___owner = 'banner___internal___owner',
  banner___internal___type = 'banner___internal___type',
  banner___childMdx___rawBody = 'banner___childMdx___rawBody',
  banner___childMdx___fileAbsolutePath = 'banner___childMdx___fileAbsolutePath',
  banner___childMdx___frontmatter___title = 'banner___childMdx___frontmatter___title',
  banner___childMdx___frontmatter___date = 'banner___childMdx___frontmatter___date',
  banner___childMdx___frontmatter___category = 'banner___childMdx___frontmatter___category',
  banner___childMdx___frontmatter___tags = 'banner___childMdx___frontmatter___tags',
  banner___childMdx___frontmatter___bannerStyle = 'banner___childMdx___frontmatter___bannerStyle',
  banner___childMdx___frontmatter___description = 'banner___childMdx___frontmatter___description',
  banner___childMdx___frontmatter___keywords = 'banner___childMdx___frontmatter___keywords',
  banner___childMdx___frontmatter___isDraft = 'banner___childMdx___frontmatter___isDraft',
  banner___childMdx___frontmatter___slug = 'banner___childMdx___frontmatter___slug',
  banner___childMdx___frontmatter___reviewers = 'banner___childMdx___frontmatter___reviewers',
  banner___childMdx___slug = 'banner___childMdx___slug',
  banner___childMdx___body = 'banner___childMdx___body',
  banner___childMdx___excerpt = 'banner___childMdx___excerpt',
  banner___childMdx___headings = 'banner___childMdx___headings',
  banner___childMdx___headings___value = 'banner___childMdx___headings___value',
  banner___childMdx___headings___depth = 'banner___childMdx___headings___depth',
  banner___childMdx___html = 'banner___childMdx___html',
  banner___childMdx___mdxAST = 'banner___childMdx___mdxAST',
  banner___childMdx___tableOfContents = 'banner___childMdx___tableOfContents',
  banner___childMdx___timeToRead = 'banner___childMdx___timeToRead',
  banner___childMdx___wordCount___paragraphs = 'banner___childMdx___wordCount___paragraphs',
  banner___childMdx___wordCount___sentences = 'banner___childMdx___wordCount___sentences',
  banner___childMdx___wordCount___words = 'banner___childMdx___wordCount___words',
  banner___childMdx___id = 'banner___childMdx___id',
  banner___childMdx___parent___id = 'banner___childMdx___parent___id',
  banner___childMdx___parent___children = 'banner___childMdx___parent___children',
  banner___childMdx___children = 'banner___childMdx___children',
  banner___childMdx___children___id = 'banner___childMdx___children___id',
  banner___childMdx___children___children = 'banner___childMdx___children___children',
  banner___childMdx___internal___content = 'banner___childMdx___internal___content',
  banner___childMdx___internal___contentDigest = 'banner___childMdx___internal___contentDigest',
  banner___childMdx___internal___description = 'banner___childMdx___internal___description',
  banner___childMdx___internal___fieldOwners = 'banner___childMdx___internal___fieldOwners',
  banner___childMdx___internal___ignoreType = 'banner___childMdx___internal___ignoreType',
  banner___childMdx___internal___mediaType = 'banner___childMdx___internal___mediaType',
  banner___childMdx___internal___owner = 'banner___childMdx___internal___owner',
  banner___childMdx___internal___type = 'banner___childMdx___internal___type',
  banner___childMdx___childMdxBlogPost___id = 'banner___childMdx___childMdxBlogPost___id',
  banner___childMdx___childMdxBlogPost___globalBlogPostId = 'banner___childMdx___childMdxBlogPost___globalBlogPostId',
  banner___childMdx___childMdxBlogPost___title = 'banner___childMdx___childMdxBlogPost___title',
  banner___childMdx___childMdxBlogPost___bannerStyle = 'banner___childMdx___childMdxBlogPost___bannerStyle',
  banner___childMdx___childMdxBlogPost___hasNonDefaultSocialImageUrl = 'banner___childMdx___childMdxBlogPost___hasNonDefaultSocialImageUrl',
  banner___childMdx___childMdxBlogPost___socialImageUrl = 'banner___childMdx___childMdxBlogPost___socialImageUrl',
  banner___childMdx___childMdxBlogPost___isDraft = 'banner___childMdx___childMdxBlogPost___isDraft',
  banner___childMdx___childMdxBlogPost___reviewers = 'banner___childMdx___childMdxBlogPost___reviewers',
  banner___childMdx___childMdxBlogPost___slug = 'banner___childMdx___childMdxBlogPost___slug',
  banner___childMdx___childMdxBlogPost___langKey = 'banner___childMdx___childMdxBlogPost___langKey',
  banner___childMdx___childMdxBlogPost___date = 'banner___childMdx___childMdxBlogPost___date',
  banner___childMdx___childMdxBlogPost___dateModified = 'banner___childMdx___childMdxBlogPost___dateModified',
  banner___childMdx___childMdxBlogPost___tags = 'banner___childMdx___childMdxBlogPost___tags',
  banner___childMdx___childMdxBlogPost___category = 'banner___childMdx___childMdxBlogPost___category',
  banner___childMdx___childMdxBlogPost___categorySlug = 'banner___childMdx___childMdxBlogPost___categorySlug',
  banner___childMdx___childMdxBlogPost___description = 'banner___childMdx___childMdxBlogPost___description',
  banner___childMdx___childMdxBlogPost___keywords = 'banner___childMdx___childMdxBlogPost___keywords',
  banner___childMdx___childMdxBlogPost___tableOfContents = 'banner___childMdx___childMdxBlogPost___tableOfContents',
  banner___childMdx___childMdxBlogPost___excerpt = 'banner___childMdx___childMdxBlogPost___excerpt',
  banner___childMdx___childMdxBlogPost___body = 'banner___childMdx___childMdxBlogPost___body',
  banner___childMdx___childMdxBlogPost___children = 'banner___childMdx___childMdxBlogPost___children',
  bannerStyle = 'bannerStyle',
  hasNonDefaultSocialImageUrl = 'hasNonDefaultSocialImageUrl',
  socialImageUrl = 'socialImageUrl',
  isDraft = 'isDraft',
  reviewers = 'reviewers',
  reviewers___url = 'reviewers___url',
  reviewers___name = 'reviewers___name',
  externalLinks___devto = 'externalLinks___devto',
  externalLinks___canonical = 'externalLinks___canonical',
  externalLinks___github = 'externalLinks___github',
  slug = 'slug',
  langKey = 'langKey',
  publisher___id = 'publisher___id',
  publisher___url = 'publisher___url',
  publisher___name = 'publisher___name',
  publisher___logoUrl = 'publisher___logoUrl',
  date = 'date',
  dateModified = 'dateModified',
  tags = 'tags',
  category = 'category',
  categorySlug = 'categorySlug',
  tableOfContents = 'tableOfContents',
  description = 'description',
  keywords = 'keywords',
}

export type BlogPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  globalBlogPostId?: Maybe<IdQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  body?: Maybe<StringQueryOperatorInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  banner?: Maybe<FileFilterInput>
  bannerStyle?: Maybe<BannerStyleQueryOperatorInput>
  hasNonDefaultSocialImageUrl?: Maybe<BooleanQueryOperatorInput>
  socialImageUrl?: Maybe<StringQueryOperatorInput>
  isDraft?: Maybe<BooleanQueryOperatorInput>
  reviewers?: Maybe<PersonFilterListInput>
  externalLinks?: Maybe<ExternalLinksFilterInput>
  slug?: Maybe<StringQueryOperatorInput>
  langKey?: Maybe<LangKeyQueryOperatorInput>
  publisher?: Maybe<PublisherFilterInput>
  date?: Maybe<DateQueryOperatorInput>
  dateModified?: Maybe<DateQueryOperatorInput>
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
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
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
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  publicURL = 'publicURL',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp___resolutions___base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp___resolutions___tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp___resolutions___aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp___resolutions___width',
  childImageSharp___resolutions___height = 'childImageSharp___resolutions___height',
  childImageSharp___resolutions___src = 'childImageSharp___resolutions___src',
  childImageSharp___resolutions___srcSet = 'childImageSharp___resolutions___srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp___resolutions___srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp___resolutions___originalName',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp___sizes___base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp___sizes___tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp___sizes___aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp___sizes___src',
  childImageSharp___sizes___srcSet = 'childImageSharp___sizes___srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp___sizes___srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp___sizes___sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp___sizes___originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp___sizes___originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp___sizes___presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp___sizes___presentationHeight',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  childMdx___rawBody = 'childMdx___rawBody',
  childMdx___fileAbsolutePath = 'childMdx___fileAbsolutePath',
  childMdx___frontmatter___title = 'childMdx___frontmatter___title',
  childMdx___frontmatter___date = 'childMdx___frontmatter___date',
  childMdx___frontmatter___category = 'childMdx___frontmatter___category',
  childMdx___frontmatter___tags = 'childMdx___frontmatter___tags',
  childMdx___frontmatter___banner___sourceInstanceName = 'childMdx___frontmatter___banner___sourceInstanceName',
  childMdx___frontmatter___banner___absolutePath = 'childMdx___frontmatter___banner___absolutePath',
  childMdx___frontmatter___banner___relativePath = 'childMdx___frontmatter___banner___relativePath',
  childMdx___frontmatter___banner___extension = 'childMdx___frontmatter___banner___extension',
  childMdx___frontmatter___banner___size = 'childMdx___frontmatter___banner___size',
  childMdx___frontmatter___banner___prettySize = 'childMdx___frontmatter___banner___prettySize',
  childMdx___frontmatter___banner___modifiedTime = 'childMdx___frontmatter___banner___modifiedTime',
  childMdx___frontmatter___banner___accessTime = 'childMdx___frontmatter___banner___accessTime',
  childMdx___frontmatter___banner___changeTime = 'childMdx___frontmatter___banner___changeTime',
  childMdx___frontmatter___banner___birthTime = 'childMdx___frontmatter___banner___birthTime',
  childMdx___frontmatter___banner___root = 'childMdx___frontmatter___banner___root',
  childMdx___frontmatter___banner___dir = 'childMdx___frontmatter___banner___dir',
  childMdx___frontmatter___banner___base = 'childMdx___frontmatter___banner___base',
  childMdx___frontmatter___banner___ext = 'childMdx___frontmatter___banner___ext',
  childMdx___frontmatter___banner___name = 'childMdx___frontmatter___banner___name',
  childMdx___frontmatter___banner___relativeDirectory = 'childMdx___frontmatter___banner___relativeDirectory',
  childMdx___frontmatter___banner___dev = 'childMdx___frontmatter___banner___dev',
  childMdx___frontmatter___banner___mode = 'childMdx___frontmatter___banner___mode',
  childMdx___frontmatter___banner___nlink = 'childMdx___frontmatter___banner___nlink',
  childMdx___frontmatter___banner___uid = 'childMdx___frontmatter___banner___uid',
  childMdx___frontmatter___banner___gid = 'childMdx___frontmatter___banner___gid',
  childMdx___frontmatter___banner___rdev = 'childMdx___frontmatter___banner___rdev',
  childMdx___frontmatter___banner___ino = 'childMdx___frontmatter___banner___ino',
  childMdx___frontmatter___banner___atimeMs = 'childMdx___frontmatter___banner___atimeMs',
  childMdx___frontmatter___banner___mtimeMs = 'childMdx___frontmatter___banner___mtimeMs',
  childMdx___frontmatter___banner___ctimeMs = 'childMdx___frontmatter___banner___ctimeMs',
  childMdx___frontmatter___banner___atime = 'childMdx___frontmatter___banner___atime',
  childMdx___frontmatter___banner___mtime = 'childMdx___frontmatter___banner___mtime',
  childMdx___frontmatter___banner___ctime = 'childMdx___frontmatter___banner___ctime',
  childMdx___frontmatter___banner___birthtime = 'childMdx___frontmatter___banner___birthtime',
  childMdx___frontmatter___banner___birthtimeMs = 'childMdx___frontmatter___banner___birthtimeMs',
  childMdx___frontmatter___banner___blksize = 'childMdx___frontmatter___banner___blksize',
  childMdx___frontmatter___banner___blocks = 'childMdx___frontmatter___banner___blocks',
  childMdx___frontmatter___banner___publicURL = 'childMdx___frontmatter___banner___publicURL',
  childMdx___frontmatter___banner___id = 'childMdx___frontmatter___banner___id',
  childMdx___frontmatter___banner___children = 'childMdx___frontmatter___banner___children',
  childMdx___frontmatter___bannerStyle = 'childMdx___frontmatter___bannerStyle',
  childMdx___frontmatter___externalLinks___canonical = 'childMdx___frontmatter___externalLinks___canonical',
  childMdx___frontmatter___externalLinks___devto = 'childMdx___frontmatter___externalLinks___devto',
  childMdx___frontmatter___publisher___name = 'childMdx___frontmatter___publisher___name',
  childMdx___frontmatter___publisher___id = 'childMdx___frontmatter___publisher___id',
  childMdx___frontmatter___publisher___url = 'childMdx___frontmatter___publisher___url',
  childMdx___frontmatter___publisher___logoUrl = 'childMdx___frontmatter___publisher___logoUrl',
  childMdx___frontmatter___description = 'childMdx___frontmatter___description',
  childMdx___frontmatter___keywords = 'childMdx___frontmatter___keywords',
  childMdx___frontmatter___isDraft = 'childMdx___frontmatter___isDraft',
  childMdx___frontmatter___slug = 'childMdx___frontmatter___slug',
  childMdx___frontmatter___reviewers = 'childMdx___frontmatter___reviewers',
  childMdx___frontmatter___reviewers___name = 'childMdx___frontmatter___reviewers___name',
  childMdx___frontmatter___reviewers___url = 'childMdx___frontmatter___reviewers___url',
  childMdx___slug = 'childMdx___slug',
  childMdx___body = 'childMdx___body',
  childMdx___excerpt = 'childMdx___excerpt',
  childMdx___headings = 'childMdx___headings',
  childMdx___headings___value = 'childMdx___headings___value',
  childMdx___headings___depth = 'childMdx___headings___depth',
  childMdx___html = 'childMdx___html',
  childMdx___mdxAST = 'childMdx___mdxAST',
  childMdx___tableOfContents = 'childMdx___tableOfContents',
  childMdx___timeToRead = 'childMdx___timeToRead',
  childMdx___wordCount___paragraphs = 'childMdx___wordCount___paragraphs',
  childMdx___wordCount___sentences = 'childMdx___wordCount___sentences',
  childMdx___wordCount___words = 'childMdx___wordCount___words',
  childMdx___id = 'childMdx___id',
  childMdx___parent___id = 'childMdx___parent___id',
  childMdx___parent___parent___id = 'childMdx___parent___parent___id',
  childMdx___parent___parent___children = 'childMdx___parent___parent___children',
  childMdx___parent___children = 'childMdx___parent___children',
  childMdx___parent___children___id = 'childMdx___parent___children___id',
  childMdx___parent___children___children = 'childMdx___parent___children___children',
  childMdx___parent___internal___content = 'childMdx___parent___internal___content',
  childMdx___parent___internal___contentDigest = 'childMdx___parent___internal___contentDigest',
  childMdx___parent___internal___description = 'childMdx___parent___internal___description',
  childMdx___parent___internal___fieldOwners = 'childMdx___parent___internal___fieldOwners',
  childMdx___parent___internal___ignoreType = 'childMdx___parent___internal___ignoreType',
  childMdx___parent___internal___mediaType = 'childMdx___parent___internal___mediaType',
  childMdx___parent___internal___owner = 'childMdx___parent___internal___owner',
  childMdx___parent___internal___type = 'childMdx___parent___internal___type',
  childMdx___children = 'childMdx___children',
  childMdx___children___id = 'childMdx___children___id',
  childMdx___children___parent___id = 'childMdx___children___parent___id',
  childMdx___children___parent___children = 'childMdx___children___parent___children',
  childMdx___children___children = 'childMdx___children___children',
  childMdx___children___children___id = 'childMdx___children___children___id',
  childMdx___children___children___children = 'childMdx___children___children___children',
  childMdx___children___internal___content = 'childMdx___children___internal___content',
  childMdx___children___internal___contentDigest = 'childMdx___children___internal___contentDigest',
  childMdx___children___internal___description = 'childMdx___children___internal___description',
  childMdx___children___internal___fieldOwners = 'childMdx___children___internal___fieldOwners',
  childMdx___children___internal___ignoreType = 'childMdx___children___internal___ignoreType',
  childMdx___children___internal___mediaType = 'childMdx___children___internal___mediaType',
  childMdx___children___internal___owner = 'childMdx___children___internal___owner',
  childMdx___children___internal___type = 'childMdx___children___internal___type',
  childMdx___internal___content = 'childMdx___internal___content',
  childMdx___internal___contentDigest = 'childMdx___internal___contentDigest',
  childMdx___internal___description = 'childMdx___internal___description',
  childMdx___internal___fieldOwners = 'childMdx___internal___fieldOwners',
  childMdx___internal___ignoreType = 'childMdx___internal___ignoreType',
  childMdx___internal___mediaType = 'childMdx___internal___mediaType',
  childMdx___internal___owner = 'childMdx___internal___owner',
  childMdx___internal___type = 'childMdx___internal___type',
  childMdx___childMdxBlogPost___id = 'childMdx___childMdxBlogPost___id',
  childMdx___childMdxBlogPost___globalBlogPostId = 'childMdx___childMdxBlogPost___globalBlogPostId',
  childMdx___childMdxBlogPost___title = 'childMdx___childMdxBlogPost___title',
  childMdx___childMdxBlogPost___banner___sourceInstanceName = 'childMdx___childMdxBlogPost___banner___sourceInstanceName',
  childMdx___childMdxBlogPost___banner___absolutePath = 'childMdx___childMdxBlogPost___banner___absolutePath',
  childMdx___childMdxBlogPost___banner___relativePath = 'childMdx___childMdxBlogPost___banner___relativePath',
  childMdx___childMdxBlogPost___banner___extension = 'childMdx___childMdxBlogPost___banner___extension',
  childMdx___childMdxBlogPost___banner___size = 'childMdx___childMdxBlogPost___banner___size',
  childMdx___childMdxBlogPost___banner___prettySize = 'childMdx___childMdxBlogPost___banner___prettySize',
  childMdx___childMdxBlogPost___banner___modifiedTime = 'childMdx___childMdxBlogPost___banner___modifiedTime',
  childMdx___childMdxBlogPost___banner___accessTime = 'childMdx___childMdxBlogPost___banner___accessTime',
  childMdx___childMdxBlogPost___banner___changeTime = 'childMdx___childMdxBlogPost___banner___changeTime',
  childMdx___childMdxBlogPost___banner___birthTime = 'childMdx___childMdxBlogPost___banner___birthTime',
  childMdx___childMdxBlogPost___banner___root = 'childMdx___childMdxBlogPost___banner___root',
  childMdx___childMdxBlogPost___banner___dir = 'childMdx___childMdxBlogPost___banner___dir',
  childMdx___childMdxBlogPost___banner___base = 'childMdx___childMdxBlogPost___banner___base',
  childMdx___childMdxBlogPost___banner___ext = 'childMdx___childMdxBlogPost___banner___ext',
  childMdx___childMdxBlogPost___banner___name = 'childMdx___childMdxBlogPost___banner___name',
  childMdx___childMdxBlogPost___banner___relativeDirectory = 'childMdx___childMdxBlogPost___banner___relativeDirectory',
  childMdx___childMdxBlogPost___banner___dev = 'childMdx___childMdxBlogPost___banner___dev',
  childMdx___childMdxBlogPost___banner___mode = 'childMdx___childMdxBlogPost___banner___mode',
  childMdx___childMdxBlogPost___banner___nlink = 'childMdx___childMdxBlogPost___banner___nlink',
  childMdx___childMdxBlogPost___banner___uid = 'childMdx___childMdxBlogPost___banner___uid',
  childMdx___childMdxBlogPost___banner___gid = 'childMdx___childMdxBlogPost___banner___gid',
  childMdx___childMdxBlogPost___banner___rdev = 'childMdx___childMdxBlogPost___banner___rdev',
  childMdx___childMdxBlogPost___banner___ino = 'childMdx___childMdxBlogPost___banner___ino',
  childMdx___childMdxBlogPost___banner___atimeMs = 'childMdx___childMdxBlogPost___banner___atimeMs',
  childMdx___childMdxBlogPost___banner___mtimeMs = 'childMdx___childMdxBlogPost___banner___mtimeMs',
  childMdx___childMdxBlogPost___banner___ctimeMs = 'childMdx___childMdxBlogPost___banner___ctimeMs',
  childMdx___childMdxBlogPost___banner___atime = 'childMdx___childMdxBlogPost___banner___atime',
  childMdx___childMdxBlogPost___banner___mtime = 'childMdx___childMdxBlogPost___banner___mtime',
  childMdx___childMdxBlogPost___banner___ctime = 'childMdx___childMdxBlogPost___banner___ctime',
  childMdx___childMdxBlogPost___banner___birthtime = 'childMdx___childMdxBlogPost___banner___birthtime',
  childMdx___childMdxBlogPost___banner___birthtimeMs = 'childMdx___childMdxBlogPost___banner___birthtimeMs',
  childMdx___childMdxBlogPost___banner___blksize = 'childMdx___childMdxBlogPost___banner___blksize',
  childMdx___childMdxBlogPost___banner___blocks = 'childMdx___childMdxBlogPost___banner___blocks',
  childMdx___childMdxBlogPost___banner___publicURL = 'childMdx___childMdxBlogPost___banner___publicURL',
  childMdx___childMdxBlogPost___banner___id = 'childMdx___childMdxBlogPost___banner___id',
  childMdx___childMdxBlogPost___banner___children = 'childMdx___childMdxBlogPost___banner___children',
  childMdx___childMdxBlogPost___bannerStyle = 'childMdx___childMdxBlogPost___bannerStyle',
  childMdx___childMdxBlogPost___hasNonDefaultSocialImageUrl = 'childMdx___childMdxBlogPost___hasNonDefaultSocialImageUrl',
  childMdx___childMdxBlogPost___socialImageUrl = 'childMdx___childMdxBlogPost___socialImageUrl',
  childMdx___childMdxBlogPost___isDraft = 'childMdx___childMdxBlogPost___isDraft',
  childMdx___childMdxBlogPost___reviewers = 'childMdx___childMdxBlogPost___reviewers',
  childMdx___childMdxBlogPost___reviewers___url = 'childMdx___childMdxBlogPost___reviewers___url',
  childMdx___childMdxBlogPost___reviewers___name = 'childMdx___childMdxBlogPost___reviewers___name',
  childMdx___childMdxBlogPost___externalLinks___devto = 'childMdx___childMdxBlogPost___externalLinks___devto',
  childMdx___childMdxBlogPost___externalLinks___canonical = 'childMdx___childMdxBlogPost___externalLinks___canonical',
  childMdx___childMdxBlogPost___externalLinks___github = 'childMdx___childMdxBlogPost___externalLinks___github',
  childMdx___childMdxBlogPost___slug = 'childMdx___childMdxBlogPost___slug',
  childMdx___childMdxBlogPost___langKey = 'childMdx___childMdxBlogPost___langKey',
  childMdx___childMdxBlogPost___publisher___id = 'childMdx___childMdxBlogPost___publisher___id',
  childMdx___childMdxBlogPost___publisher___url = 'childMdx___childMdxBlogPost___publisher___url',
  childMdx___childMdxBlogPost___publisher___name = 'childMdx___childMdxBlogPost___publisher___name',
  childMdx___childMdxBlogPost___publisher___logoUrl = 'childMdx___childMdxBlogPost___publisher___logoUrl',
  childMdx___childMdxBlogPost___date = 'childMdx___childMdxBlogPost___date',
  childMdx___childMdxBlogPost___dateModified = 'childMdx___childMdxBlogPost___dateModified',
  childMdx___childMdxBlogPost___tags = 'childMdx___childMdxBlogPost___tags',
  childMdx___childMdxBlogPost___category = 'childMdx___childMdxBlogPost___category',
  childMdx___childMdxBlogPost___categorySlug = 'childMdx___childMdxBlogPost___categorySlug',
  childMdx___childMdxBlogPost___description = 'childMdx___childMdxBlogPost___description',
  childMdx___childMdxBlogPost___keywords = 'childMdx___childMdxBlogPost___keywords',
  childMdx___childMdxBlogPost___tableOfContents = 'childMdx___childMdxBlogPost___tableOfContents',
  childMdx___childMdxBlogPost___excerpt = 'childMdx___childMdxBlogPost___excerpt',
  childMdx___childMdxBlogPost___body = 'childMdx___childMdxBlogPost___body',
  childMdx___childMdxBlogPost___parent___id = 'childMdx___childMdxBlogPost___parent___id',
  childMdx___childMdxBlogPost___parent___children = 'childMdx___childMdxBlogPost___parent___children',
  childMdx___childMdxBlogPost___children = 'childMdx___childMdxBlogPost___children',
  childMdx___childMdxBlogPost___children___id = 'childMdx___childMdxBlogPost___children___id',
  childMdx___childMdxBlogPost___children___children = 'childMdx___childMdxBlogPost___children___children',
  childMdx___childMdxBlogPost___internal___content = 'childMdx___childMdxBlogPost___internal___content',
  childMdx___childMdxBlogPost___internal___contentDigest = 'childMdx___childMdxBlogPost___internal___contentDigest',
  childMdx___childMdxBlogPost___internal___description = 'childMdx___childMdxBlogPost___internal___description',
  childMdx___childMdxBlogPost___internal___fieldOwners = 'childMdx___childMdxBlogPost___internal___fieldOwners',
  childMdx___childMdxBlogPost___internal___ignoreType = 'childMdx___childMdxBlogPost___internal___ignoreType',
  childMdx___childMdxBlogPost___internal___mediaType = 'childMdx___childMdxBlogPost___internal___mediaType',
  childMdx___childMdxBlogPost___internal___owner = 'childMdx___childMdxBlogPost___internal___owner',
  childMdx___childMdxBlogPost___internal___type = 'childMdx___childMdxBlogPost___internal___type',
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
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

export type IdQueryOperatorInput = {
  eq?: Maybe<Scalars['ID']>
  ne?: Maybe<Scalars['ID']>
  in?: Maybe<Array<Maybe<Scalars['ID']>>>
  nin?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  EAST = 'EAST',
  SOUTHEAST = 'SOUTHEAST',
  SOUTH = 'SOUTH',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
  NORTHWEST = 'NORTHWEST',
  ENTROPY = 'ENTROPY',
  ATTENTION = 'ATTENTION',
}

export enum ImageFit {
  COVER = 'COVER',
  CONTAIN = 'CONTAIN',
  FILL = 'FILL',
  INSIDE = 'INSIDE',
  OUTSIDE = 'OUTSIDE',
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP',
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
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___originalName = 'fixed___originalName',
  resolutions___base64 = 'resolutions___base64',
  resolutions___tracedSVG = 'resolutions___tracedSVG',
  resolutions___aspectRatio = 'resolutions___aspectRatio',
  resolutions___width = 'resolutions___width',
  resolutions___height = 'resolutions___height',
  resolutions___src = 'resolutions___src',
  resolutions___srcSet = 'resolutions___srcSet',
  resolutions___srcWebp = 'resolutions___srcWebp',
  resolutions___srcSetWebp = 'resolutions___srcSetWebp',
  resolutions___originalName = 'resolutions___originalName',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___presentationHeight = 'fluid___presentationHeight',
  sizes___base64 = 'sizes___base64',
  sizes___tracedSVG = 'sizes___tracedSVG',
  sizes___aspectRatio = 'sizes___aspectRatio',
  sizes___src = 'sizes___src',
  sizes___srcSet = 'sizes___srcSet',
  sizes___srcWebp = 'sizes___srcWebp',
  sizes___srcSetWebp = 'sizes___srcSetWebp',
  sizes___sizes = 'sizes___sizes',
  sizes___originalImg = 'sizes___originalImg',
  sizes___originalName = 'sizes___originalName',
  sizes___presentationWidth = 'sizes___presentationWidth',
  sizes___presentationHeight = 'sizes___presentationHeight',
  original___width = 'original___width',
  original___height = 'original___height',
  original___src = 'original___src',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___originalName = 'resize___originalName',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
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
  EN = 'EN',
  PT_BR = 'PT_BR',
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
  slug?: Maybe<Scalars['String']>
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
    hasNonDefaultSocialImageUrl: Scalars['Boolean']
    socialImageUrl: Scalars['String']
    isDraft: Scalars['Boolean']
    reviewers: Array<Person>
    externalLinks: ExternalLinks
    slug: Scalars['String']
    langKey: LangKey
    publisher?: Maybe<Publisher>
    date: Scalars['Date']
    dateModified: Scalars['Date']
    tags: Array<Scalars['String']>
    category: Scalars['String']
    categorySlug: Scalars['String']
    description?: Maybe<Scalars['String']>
    keywords: Array<Scalars['String']>
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

export type MdxBlogPostDateModifiedArgs = {
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
  id = 'id',
  globalBlogPostId = 'globalBlogPostId',
  title = 'title',
  banner___sourceInstanceName = 'banner___sourceInstanceName',
  banner___absolutePath = 'banner___absolutePath',
  banner___relativePath = 'banner___relativePath',
  banner___extension = 'banner___extension',
  banner___size = 'banner___size',
  banner___prettySize = 'banner___prettySize',
  banner___modifiedTime = 'banner___modifiedTime',
  banner___accessTime = 'banner___accessTime',
  banner___changeTime = 'banner___changeTime',
  banner___birthTime = 'banner___birthTime',
  banner___root = 'banner___root',
  banner___dir = 'banner___dir',
  banner___base = 'banner___base',
  banner___ext = 'banner___ext',
  banner___name = 'banner___name',
  banner___relativeDirectory = 'banner___relativeDirectory',
  banner___dev = 'banner___dev',
  banner___mode = 'banner___mode',
  banner___nlink = 'banner___nlink',
  banner___uid = 'banner___uid',
  banner___gid = 'banner___gid',
  banner___rdev = 'banner___rdev',
  banner___ino = 'banner___ino',
  banner___atimeMs = 'banner___atimeMs',
  banner___mtimeMs = 'banner___mtimeMs',
  banner___ctimeMs = 'banner___ctimeMs',
  banner___atime = 'banner___atime',
  banner___mtime = 'banner___mtime',
  banner___ctime = 'banner___ctime',
  banner___birthtime = 'banner___birthtime',
  banner___birthtimeMs = 'banner___birthtimeMs',
  banner___blksize = 'banner___blksize',
  banner___blocks = 'banner___blocks',
  banner___publicURL = 'banner___publicURL',
  banner___childImageSharp___fixed___base64 = 'banner___childImageSharp___fixed___base64',
  banner___childImageSharp___fixed___tracedSVG = 'banner___childImageSharp___fixed___tracedSVG',
  banner___childImageSharp___fixed___aspectRatio = 'banner___childImageSharp___fixed___aspectRatio',
  banner___childImageSharp___fixed___width = 'banner___childImageSharp___fixed___width',
  banner___childImageSharp___fixed___height = 'banner___childImageSharp___fixed___height',
  banner___childImageSharp___fixed___src = 'banner___childImageSharp___fixed___src',
  banner___childImageSharp___fixed___srcSet = 'banner___childImageSharp___fixed___srcSet',
  banner___childImageSharp___fixed___srcWebp = 'banner___childImageSharp___fixed___srcWebp',
  banner___childImageSharp___fixed___srcSetWebp = 'banner___childImageSharp___fixed___srcSetWebp',
  banner___childImageSharp___fixed___originalName = 'banner___childImageSharp___fixed___originalName',
  banner___childImageSharp___resolutions___base64 = 'banner___childImageSharp___resolutions___base64',
  banner___childImageSharp___resolutions___tracedSVG = 'banner___childImageSharp___resolutions___tracedSVG',
  banner___childImageSharp___resolutions___aspectRatio = 'banner___childImageSharp___resolutions___aspectRatio',
  banner___childImageSharp___resolutions___width = 'banner___childImageSharp___resolutions___width',
  banner___childImageSharp___resolutions___height = 'banner___childImageSharp___resolutions___height',
  banner___childImageSharp___resolutions___src = 'banner___childImageSharp___resolutions___src',
  banner___childImageSharp___resolutions___srcSet = 'banner___childImageSharp___resolutions___srcSet',
  banner___childImageSharp___resolutions___srcWebp = 'banner___childImageSharp___resolutions___srcWebp',
  banner___childImageSharp___resolutions___srcSetWebp = 'banner___childImageSharp___resolutions___srcSetWebp',
  banner___childImageSharp___resolutions___originalName = 'banner___childImageSharp___resolutions___originalName',
  banner___childImageSharp___fluid___base64 = 'banner___childImageSharp___fluid___base64',
  banner___childImageSharp___fluid___tracedSVG = 'banner___childImageSharp___fluid___tracedSVG',
  banner___childImageSharp___fluid___aspectRatio = 'banner___childImageSharp___fluid___aspectRatio',
  banner___childImageSharp___fluid___src = 'banner___childImageSharp___fluid___src',
  banner___childImageSharp___fluid___srcSet = 'banner___childImageSharp___fluid___srcSet',
  banner___childImageSharp___fluid___srcWebp = 'banner___childImageSharp___fluid___srcWebp',
  banner___childImageSharp___fluid___srcSetWebp = 'banner___childImageSharp___fluid___srcSetWebp',
  banner___childImageSharp___fluid___sizes = 'banner___childImageSharp___fluid___sizes',
  banner___childImageSharp___fluid___originalImg = 'banner___childImageSharp___fluid___originalImg',
  banner___childImageSharp___fluid___originalName = 'banner___childImageSharp___fluid___originalName',
  banner___childImageSharp___fluid___presentationWidth = 'banner___childImageSharp___fluid___presentationWidth',
  banner___childImageSharp___fluid___presentationHeight = 'banner___childImageSharp___fluid___presentationHeight',
  banner___childImageSharp___sizes___base64 = 'banner___childImageSharp___sizes___base64',
  banner___childImageSharp___sizes___tracedSVG = 'banner___childImageSharp___sizes___tracedSVG',
  banner___childImageSharp___sizes___aspectRatio = 'banner___childImageSharp___sizes___aspectRatio',
  banner___childImageSharp___sizes___src = 'banner___childImageSharp___sizes___src',
  banner___childImageSharp___sizes___srcSet = 'banner___childImageSharp___sizes___srcSet',
  banner___childImageSharp___sizes___srcWebp = 'banner___childImageSharp___sizes___srcWebp',
  banner___childImageSharp___sizes___srcSetWebp = 'banner___childImageSharp___sizes___srcSetWebp',
  banner___childImageSharp___sizes___sizes = 'banner___childImageSharp___sizes___sizes',
  banner___childImageSharp___sizes___originalImg = 'banner___childImageSharp___sizes___originalImg',
  banner___childImageSharp___sizes___originalName = 'banner___childImageSharp___sizes___originalName',
  banner___childImageSharp___sizes___presentationWidth = 'banner___childImageSharp___sizes___presentationWidth',
  banner___childImageSharp___sizes___presentationHeight = 'banner___childImageSharp___sizes___presentationHeight',
  banner___childImageSharp___original___width = 'banner___childImageSharp___original___width',
  banner___childImageSharp___original___height = 'banner___childImageSharp___original___height',
  banner___childImageSharp___original___src = 'banner___childImageSharp___original___src',
  banner___childImageSharp___resize___src = 'banner___childImageSharp___resize___src',
  banner___childImageSharp___resize___tracedSVG = 'banner___childImageSharp___resize___tracedSVG',
  banner___childImageSharp___resize___width = 'banner___childImageSharp___resize___width',
  banner___childImageSharp___resize___height = 'banner___childImageSharp___resize___height',
  banner___childImageSharp___resize___aspectRatio = 'banner___childImageSharp___resize___aspectRatio',
  banner___childImageSharp___resize___originalName = 'banner___childImageSharp___resize___originalName',
  banner___childImageSharp___id = 'banner___childImageSharp___id',
  banner___childImageSharp___parent___id = 'banner___childImageSharp___parent___id',
  banner___childImageSharp___parent___children = 'banner___childImageSharp___parent___children',
  banner___childImageSharp___children = 'banner___childImageSharp___children',
  banner___childImageSharp___children___id = 'banner___childImageSharp___children___id',
  banner___childImageSharp___children___children = 'banner___childImageSharp___children___children',
  banner___childImageSharp___internal___content = 'banner___childImageSharp___internal___content',
  banner___childImageSharp___internal___contentDigest = 'banner___childImageSharp___internal___contentDigest',
  banner___childImageSharp___internal___description = 'banner___childImageSharp___internal___description',
  banner___childImageSharp___internal___fieldOwners = 'banner___childImageSharp___internal___fieldOwners',
  banner___childImageSharp___internal___ignoreType = 'banner___childImageSharp___internal___ignoreType',
  banner___childImageSharp___internal___mediaType = 'banner___childImageSharp___internal___mediaType',
  banner___childImageSharp___internal___owner = 'banner___childImageSharp___internal___owner',
  banner___childImageSharp___internal___type = 'banner___childImageSharp___internal___type',
  banner___id = 'banner___id',
  banner___parent___id = 'banner___parent___id',
  banner___parent___parent___id = 'banner___parent___parent___id',
  banner___parent___parent___children = 'banner___parent___parent___children',
  banner___parent___children = 'banner___parent___children',
  banner___parent___children___id = 'banner___parent___children___id',
  banner___parent___children___children = 'banner___parent___children___children',
  banner___parent___internal___content = 'banner___parent___internal___content',
  banner___parent___internal___contentDigest = 'banner___parent___internal___contentDigest',
  banner___parent___internal___description = 'banner___parent___internal___description',
  banner___parent___internal___fieldOwners = 'banner___parent___internal___fieldOwners',
  banner___parent___internal___ignoreType = 'banner___parent___internal___ignoreType',
  banner___parent___internal___mediaType = 'banner___parent___internal___mediaType',
  banner___parent___internal___owner = 'banner___parent___internal___owner',
  banner___parent___internal___type = 'banner___parent___internal___type',
  banner___children = 'banner___children',
  banner___children___id = 'banner___children___id',
  banner___children___parent___id = 'banner___children___parent___id',
  banner___children___parent___children = 'banner___children___parent___children',
  banner___children___children = 'banner___children___children',
  banner___children___children___id = 'banner___children___children___id',
  banner___children___children___children = 'banner___children___children___children',
  banner___children___internal___content = 'banner___children___internal___content',
  banner___children___internal___contentDigest = 'banner___children___internal___contentDigest',
  banner___children___internal___description = 'banner___children___internal___description',
  banner___children___internal___fieldOwners = 'banner___children___internal___fieldOwners',
  banner___children___internal___ignoreType = 'banner___children___internal___ignoreType',
  banner___children___internal___mediaType = 'banner___children___internal___mediaType',
  banner___children___internal___owner = 'banner___children___internal___owner',
  banner___children___internal___type = 'banner___children___internal___type',
  banner___internal___content = 'banner___internal___content',
  banner___internal___contentDigest = 'banner___internal___contentDigest',
  banner___internal___description = 'banner___internal___description',
  banner___internal___fieldOwners = 'banner___internal___fieldOwners',
  banner___internal___ignoreType = 'banner___internal___ignoreType',
  banner___internal___mediaType = 'banner___internal___mediaType',
  banner___internal___owner = 'banner___internal___owner',
  banner___internal___type = 'banner___internal___type',
  banner___childMdx___rawBody = 'banner___childMdx___rawBody',
  banner___childMdx___fileAbsolutePath = 'banner___childMdx___fileAbsolutePath',
  banner___childMdx___frontmatter___title = 'banner___childMdx___frontmatter___title',
  banner___childMdx___frontmatter___date = 'banner___childMdx___frontmatter___date',
  banner___childMdx___frontmatter___category = 'banner___childMdx___frontmatter___category',
  banner___childMdx___frontmatter___tags = 'banner___childMdx___frontmatter___tags',
  banner___childMdx___frontmatter___bannerStyle = 'banner___childMdx___frontmatter___bannerStyle',
  banner___childMdx___frontmatter___description = 'banner___childMdx___frontmatter___description',
  banner___childMdx___frontmatter___keywords = 'banner___childMdx___frontmatter___keywords',
  banner___childMdx___frontmatter___isDraft = 'banner___childMdx___frontmatter___isDraft',
  banner___childMdx___frontmatter___slug = 'banner___childMdx___frontmatter___slug',
  banner___childMdx___frontmatter___reviewers = 'banner___childMdx___frontmatter___reviewers',
  banner___childMdx___slug = 'banner___childMdx___slug',
  banner___childMdx___body = 'banner___childMdx___body',
  banner___childMdx___excerpt = 'banner___childMdx___excerpt',
  banner___childMdx___headings = 'banner___childMdx___headings',
  banner___childMdx___headings___value = 'banner___childMdx___headings___value',
  banner___childMdx___headings___depth = 'banner___childMdx___headings___depth',
  banner___childMdx___html = 'banner___childMdx___html',
  banner___childMdx___mdxAST = 'banner___childMdx___mdxAST',
  banner___childMdx___tableOfContents = 'banner___childMdx___tableOfContents',
  banner___childMdx___timeToRead = 'banner___childMdx___timeToRead',
  banner___childMdx___wordCount___paragraphs = 'banner___childMdx___wordCount___paragraphs',
  banner___childMdx___wordCount___sentences = 'banner___childMdx___wordCount___sentences',
  banner___childMdx___wordCount___words = 'banner___childMdx___wordCount___words',
  banner___childMdx___id = 'banner___childMdx___id',
  banner___childMdx___parent___id = 'banner___childMdx___parent___id',
  banner___childMdx___parent___children = 'banner___childMdx___parent___children',
  banner___childMdx___children = 'banner___childMdx___children',
  banner___childMdx___children___id = 'banner___childMdx___children___id',
  banner___childMdx___children___children = 'banner___childMdx___children___children',
  banner___childMdx___internal___content = 'banner___childMdx___internal___content',
  banner___childMdx___internal___contentDigest = 'banner___childMdx___internal___contentDigest',
  banner___childMdx___internal___description = 'banner___childMdx___internal___description',
  banner___childMdx___internal___fieldOwners = 'banner___childMdx___internal___fieldOwners',
  banner___childMdx___internal___ignoreType = 'banner___childMdx___internal___ignoreType',
  banner___childMdx___internal___mediaType = 'banner___childMdx___internal___mediaType',
  banner___childMdx___internal___owner = 'banner___childMdx___internal___owner',
  banner___childMdx___internal___type = 'banner___childMdx___internal___type',
  banner___childMdx___childMdxBlogPost___id = 'banner___childMdx___childMdxBlogPost___id',
  banner___childMdx___childMdxBlogPost___globalBlogPostId = 'banner___childMdx___childMdxBlogPost___globalBlogPostId',
  banner___childMdx___childMdxBlogPost___title = 'banner___childMdx___childMdxBlogPost___title',
  banner___childMdx___childMdxBlogPost___bannerStyle = 'banner___childMdx___childMdxBlogPost___bannerStyle',
  banner___childMdx___childMdxBlogPost___hasNonDefaultSocialImageUrl = 'banner___childMdx___childMdxBlogPost___hasNonDefaultSocialImageUrl',
  banner___childMdx___childMdxBlogPost___socialImageUrl = 'banner___childMdx___childMdxBlogPost___socialImageUrl',
  banner___childMdx___childMdxBlogPost___isDraft = 'banner___childMdx___childMdxBlogPost___isDraft',
  banner___childMdx___childMdxBlogPost___reviewers = 'banner___childMdx___childMdxBlogPost___reviewers',
  banner___childMdx___childMdxBlogPost___slug = 'banner___childMdx___childMdxBlogPost___slug',
  banner___childMdx___childMdxBlogPost___langKey = 'banner___childMdx___childMdxBlogPost___langKey',
  banner___childMdx___childMdxBlogPost___date = 'banner___childMdx___childMdxBlogPost___date',
  banner___childMdx___childMdxBlogPost___dateModified = 'banner___childMdx___childMdxBlogPost___dateModified',
  banner___childMdx___childMdxBlogPost___tags = 'banner___childMdx___childMdxBlogPost___tags',
  banner___childMdx___childMdxBlogPost___category = 'banner___childMdx___childMdxBlogPost___category',
  banner___childMdx___childMdxBlogPost___categorySlug = 'banner___childMdx___childMdxBlogPost___categorySlug',
  banner___childMdx___childMdxBlogPost___description = 'banner___childMdx___childMdxBlogPost___description',
  banner___childMdx___childMdxBlogPost___keywords = 'banner___childMdx___childMdxBlogPost___keywords',
  banner___childMdx___childMdxBlogPost___tableOfContents = 'banner___childMdx___childMdxBlogPost___tableOfContents',
  banner___childMdx___childMdxBlogPost___excerpt = 'banner___childMdx___childMdxBlogPost___excerpt',
  banner___childMdx___childMdxBlogPost___body = 'banner___childMdx___childMdxBlogPost___body',
  banner___childMdx___childMdxBlogPost___children = 'banner___childMdx___childMdxBlogPost___children',
  bannerStyle = 'bannerStyle',
  hasNonDefaultSocialImageUrl = 'hasNonDefaultSocialImageUrl',
  socialImageUrl = 'socialImageUrl',
  isDraft = 'isDraft',
  reviewers = 'reviewers',
  reviewers___url = 'reviewers___url',
  reviewers___name = 'reviewers___name',
  externalLinks___devto = 'externalLinks___devto',
  externalLinks___canonical = 'externalLinks___canonical',
  externalLinks___github = 'externalLinks___github',
  slug = 'slug',
  langKey = 'langKey',
  publisher___id = 'publisher___id',
  publisher___url = 'publisher___url',
  publisher___name = 'publisher___name',
  publisher___logoUrl = 'publisher___logoUrl',
  date = 'date',
  dateModified = 'dateModified',
  tags = 'tags',
  category = 'category',
  categorySlug = 'categorySlug',
  description = 'description',
  keywords = 'keywords',
  tableOfContents = 'tableOfContents',
  excerpt = 'excerpt',
  body = 'body',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type MdxBlogPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  globalBlogPostId?: Maybe<IdQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  banner?: Maybe<FileFilterInput>
  bannerStyle?: Maybe<BannerStyleQueryOperatorInput>
  hasNonDefaultSocialImageUrl?: Maybe<BooleanQueryOperatorInput>
  socialImageUrl?: Maybe<StringQueryOperatorInput>
  isDraft?: Maybe<BooleanQueryOperatorInput>
  reviewers?: Maybe<PersonFilterListInput>
  externalLinks?: Maybe<ExternalLinksFilterInput>
  slug?: Maybe<StringQueryOperatorInput>
  langKey?: Maybe<LangKeyQueryOperatorInput>
  publisher?: Maybe<PublisherFilterInput>
  date?: Maybe<DateQueryOperatorInput>
  dateModified?: Maybe<DateQueryOperatorInput>
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
  rawBody = 'rawBody',
  fileAbsolutePath = 'fileAbsolutePath',
  frontmatter___title = 'frontmatter___title',
  frontmatter___date = 'frontmatter___date',
  frontmatter___category = 'frontmatter___category',
  frontmatter___tags = 'frontmatter___tags',
  frontmatter___banner___sourceInstanceName = 'frontmatter___banner___sourceInstanceName',
  frontmatter___banner___absolutePath = 'frontmatter___banner___absolutePath',
  frontmatter___banner___relativePath = 'frontmatter___banner___relativePath',
  frontmatter___banner___extension = 'frontmatter___banner___extension',
  frontmatter___banner___size = 'frontmatter___banner___size',
  frontmatter___banner___prettySize = 'frontmatter___banner___prettySize',
  frontmatter___banner___modifiedTime = 'frontmatter___banner___modifiedTime',
  frontmatter___banner___accessTime = 'frontmatter___banner___accessTime',
  frontmatter___banner___changeTime = 'frontmatter___banner___changeTime',
  frontmatter___banner___birthTime = 'frontmatter___banner___birthTime',
  frontmatter___banner___root = 'frontmatter___banner___root',
  frontmatter___banner___dir = 'frontmatter___banner___dir',
  frontmatter___banner___base = 'frontmatter___banner___base',
  frontmatter___banner___ext = 'frontmatter___banner___ext',
  frontmatter___banner___name = 'frontmatter___banner___name',
  frontmatter___banner___relativeDirectory = 'frontmatter___banner___relativeDirectory',
  frontmatter___banner___dev = 'frontmatter___banner___dev',
  frontmatter___banner___mode = 'frontmatter___banner___mode',
  frontmatter___banner___nlink = 'frontmatter___banner___nlink',
  frontmatter___banner___uid = 'frontmatter___banner___uid',
  frontmatter___banner___gid = 'frontmatter___banner___gid',
  frontmatter___banner___rdev = 'frontmatter___banner___rdev',
  frontmatter___banner___ino = 'frontmatter___banner___ino',
  frontmatter___banner___atimeMs = 'frontmatter___banner___atimeMs',
  frontmatter___banner___mtimeMs = 'frontmatter___banner___mtimeMs',
  frontmatter___banner___ctimeMs = 'frontmatter___banner___ctimeMs',
  frontmatter___banner___atime = 'frontmatter___banner___atime',
  frontmatter___banner___mtime = 'frontmatter___banner___mtime',
  frontmatter___banner___ctime = 'frontmatter___banner___ctime',
  frontmatter___banner___birthtime = 'frontmatter___banner___birthtime',
  frontmatter___banner___birthtimeMs = 'frontmatter___banner___birthtimeMs',
  frontmatter___banner___blksize = 'frontmatter___banner___blksize',
  frontmatter___banner___blocks = 'frontmatter___banner___blocks',
  frontmatter___banner___publicURL = 'frontmatter___banner___publicURL',
  frontmatter___banner___childImageSharp___id = 'frontmatter___banner___childImageSharp___id',
  frontmatter___banner___childImageSharp___children = 'frontmatter___banner___childImageSharp___children',
  frontmatter___banner___id = 'frontmatter___banner___id',
  frontmatter___banner___parent___id = 'frontmatter___banner___parent___id',
  frontmatter___banner___parent___children = 'frontmatter___banner___parent___children',
  frontmatter___banner___children = 'frontmatter___banner___children',
  frontmatter___banner___children___id = 'frontmatter___banner___children___id',
  frontmatter___banner___children___children = 'frontmatter___banner___children___children',
  frontmatter___banner___internal___content = 'frontmatter___banner___internal___content',
  frontmatter___banner___internal___contentDigest = 'frontmatter___banner___internal___contentDigest',
  frontmatter___banner___internal___description = 'frontmatter___banner___internal___description',
  frontmatter___banner___internal___fieldOwners = 'frontmatter___banner___internal___fieldOwners',
  frontmatter___banner___internal___ignoreType = 'frontmatter___banner___internal___ignoreType',
  frontmatter___banner___internal___mediaType = 'frontmatter___banner___internal___mediaType',
  frontmatter___banner___internal___owner = 'frontmatter___banner___internal___owner',
  frontmatter___banner___internal___type = 'frontmatter___banner___internal___type',
  frontmatter___banner___childMdx___rawBody = 'frontmatter___banner___childMdx___rawBody',
  frontmatter___banner___childMdx___fileAbsolutePath = 'frontmatter___banner___childMdx___fileAbsolutePath',
  frontmatter___banner___childMdx___slug = 'frontmatter___banner___childMdx___slug',
  frontmatter___banner___childMdx___body = 'frontmatter___banner___childMdx___body',
  frontmatter___banner___childMdx___excerpt = 'frontmatter___banner___childMdx___excerpt',
  frontmatter___banner___childMdx___headings = 'frontmatter___banner___childMdx___headings',
  frontmatter___banner___childMdx___html = 'frontmatter___banner___childMdx___html',
  frontmatter___banner___childMdx___mdxAST = 'frontmatter___banner___childMdx___mdxAST',
  frontmatter___banner___childMdx___tableOfContents = 'frontmatter___banner___childMdx___tableOfContents',
  frontmatter___banner___childMdx___timeToRead = 'frontmatter___banner___childMdx___timeToRead',
  frontmatter___banner___childMdx___id = 'frontmatter___banner___childMdx___id',
  frontmatter___banner___childMdx___children = 'frontmatter___banner___childMdx___children',
  frontmatter___bannerStyle = 'frontmatter___bannerStyle',
  frontmatter___externalLinks___canonical = 'frontmatter___externalLinks___canonical',
  frontmatter___externalLinks___devto = 'frontmatter___externalLinks___devto',
  frontmatter___publisher___name = 'frontmatter___publisher___name',
  frontmatter___publisher___id = 'frontmatter___publisher___id',
  frontmatter___publisher___url = 'frontmatter___publisher___url',
  frontmatter___publisher___logoUrl = 'frontmatter___publisher___logoUrl',
  frontmatter___description = 'frontmatter___description',
  frontmatter___keywords = 'frontmatter___keywords',
  frontmatter___isDraft = 'frontmatter___isDraft',
  frontmatter___slug = 'frontmatter___slug',
  frontmatter___reviewers = 'frontmatter___reviewers',
  frontmatter___reviewers___name = 'frontmatter___reviewers___name',
  frontmatter___reviewers___url = 'frontmatter___reviewers___url',
  slug = 'slug',
  body = 'body',
  excerpt = 'excerpt',
  headings = 'headings',
  headings___value = 'headings___value',
  headings___depth = 'headings___depth',
  html = 'html',
  mdxAST = 'mdxAST',
  tableOfContents = 'tableOfContents',
  timeToRead = 'timeToRead',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  childMdxBlogPost___id = 'childMdxBlogPost___id',
  childMdxBlogPost___globalBlogPostId = 'childMdxBlogPost___globalBlogPostId',
  childMdxBlogPost___title = 'childMdxBlogPost___title',
  childMdxBlogPost___banner___sourceInstanceName = 'childMdxBlogPost___banner___sourceInstanceName',
  childMdxBlogPost___banner___absolutePath = 'childMdxBlogPost___banner___absolutePath',
  childMdxBlogPost___banner___relativePath = 'childMdxBlogPost___banner___relativePath',
  childMdxBlogPost___banner___extension = 'childMdxBlogPost___banner___extension',
  childMdxBlogPost___banner___size = 'childMdxBlogPost___banner___size',
  childMdxBlogPost___banner___prettySize = 'childMdxBlogPost___banner___prettySize',
  childMdxBlogPost___banner___modifiedTime = 'childMdxBlogPost___banner___modifiedTime',
  childMdxBlogPost___banner___accessTime = 'childMdxBlogPost___banner___accessTime',
  childMdxBlogPost___banner___changeTime = 'childMdxBlogPost___banner___changeTime',
  childMdxBlogPost___banner___birthTime = 'childMdxBlogPost___banner___birthTime',
  childMdxBlogPost___banner___root = 'childMdxBlogPost___banner___root',
  childMdxBlogPost___banner___dir = 'childMdxBlogPost___banner___dir',
  childMdxBlogPost___banner___base = 'childMdxBlogPost___banner___base',
  childMdxBlogPost___banner___ext = 'childMdxBlogPost___banner___ext',
  childMdxBlogPost___banner___name = 'childMdxBlogPost___banner___name',
  childMdxBlogPost___banner___relativeDirectory = 'childMdxBlogPost___banner___relativeDirectory',
  childMdxBlogPost___banner___dev = 'childMdxBlogPost___banner___dev',
  childMdxBlogPost___banner___mode = 'childMdxBlogPost___banner___mode',
  childMdxBlogPost___banner___nlink = 'childMdxBlogPost___banner___nlink',
  childMdxBlogPost___banner___uid = 'childMdxBlogPost___banner___uid',
  childMdxBlogPost___banner___gid = 'childMdxBlogPost___banner___gid',
  childMdxBlogPost___banner___rdev = 'childMdxBlogPost___banner___rdev',
  childMdxBlogPost___banner___ino = 'childMdxBlogPost___banner___ino',
  childMdxBlogPost___banner___atimeMs = 'childMdxBlogPost___banner___atimeMs',
  childMdxBlogPost___banner___mtimeMs = 'childMdxBlogPost___banner___mtimeMs',
  childMdxBlogPost___banner___ctimeMs = 'childMdxBlogPost___banner___ctimeMs',
  childMdxBlogPost___banner___atime = 'childMdxBlogPost___banner___atime',
  childMdxBlogPost___banner___mtime = 'childMdxBlogPost___banner___mtime',
  childMdxBlogPost___banner___ctime = 'childMdxBlogPost___banner___ctime',
  childMdxBlogPost___banner___birthtime = 'childMdxBlogPost___banner___birthtime',
  childMdxBlogPost___banner___birthtimeMs = 'childMdxBlogPost___banner___birthtimeMs',
  childMdxBlogPost___banner___blksize = 'childMdxBlogPost___banner___blksize',
  childMdxBlogPost___banner___blocks = 'childMdxBlogPost___banner___blocks',
  childMdxBlogPost___banner___publicURL = 'childMdxBlogPost___banner___publicURL',
  childMdxBlogPost___banner___childImageSharp___id = 'childMdxBlogPost___banner___childImageSharp___id',
  childMdxBlogPost___banner___childImageSharp___children = 'childMdxBlogPost___banner___childImageSharp___children',
  childMdxBlogPost___banner___id = 'childMdxBlogPost___banner___id',
  childMdxBlogPost___banner___parent___id = 'childMdxBlogPost___banner___parent___id',
  childMdxBlogPost___banner___parent___children = 'childMdxBlogPost___banner___parent___children',
  childMdxBlogPost___banner___children = 'childMdxBlogPost___banner___children',
  childMdxBlogPost___banner___children___id = 'childMdxBlogPost___banner___children___id',
  childMdxBlogPost___banner___children___children = 'childMdxBlogPost___banner___children___children',
  childMdxBlogPost___banner___internal___content = 'childMdxBlogPost___banner___internal___content',
  childMdxBlogPost___banner___internal___contentDigest = 'childMdxBlogPost___banner___internal___contentDigest',
  childMdxBlogPost___banner___internal___description = 'childMdxBlogPost___banner___internal___description',
  childMdxBlogPost___banner___internal___fieldOwners = 'childMdxBlogPost___banner___internal___fieldOwners',
  childMdxBlogPost___banner___internal___ignoreType = 'childMdxBlogPost___banner___internal___ignoreType',
  childMdxBlogPost___banner___internal___mediaType = 'childMdxBlogPost___banner___internal___mediaType',
  childMdxBlogPost___banner___internal___owner = 'childMdxBlogPost___banner___internal___owner',
  childMdxBlogPost___banner___internal___type = 'childMdxBlogPost___banner___internal___type',
  childMdxBlogPost___banner___childMdx___rawBody = 'childMdxBlogPost___banner___childMdx___rawBody',
  childMdxBlogPost___banner___childMdx___fileAbsolutePath = 'childMdxBlogPost___banner___childMdx___fileAbsolutePath',
  childMdxBlogPost___banner___childMdx___slug = 'childMdxBlogPost___banner___childMdx___slug',
  childMdxBlogPost___banner___childMdx___body = 'childMdxBlogPost___banner___childMdx___body',
  childMdxBlogPost___banner___childMdx___excerpt = 'childMdxBlogPost___banner___childMdx___excerpt',
  childMdxBlogPost___banner___childMdx___headings = 'childMdxBlogPost___banner___childMdx___headings',
  childMdxBlogPost___banner___childMdx___html = 'childMdxBlogPost___banner___childMdx___html',
  childMdxBlogPost___banner___childMdx___mdxAST = 'childMdxBlogPost___banner___childMdx___mdxAST',
  childMdxBlogPost___banner___childMdx___tableOfContents = 'childMdxBlogPost___banner___childMdx___tableOfContents',
  childMdxBlogPost___banner___childMdx___timeToRead = 'childMdxBlogPost___banner___childMdx___timeToRead',
  childMdxBlogPost___banner___childMdx___id = 'childMdxBlogPost___banner___childMdx___id',
  childMdxBlogPost___banner___childMdx___children = 'childMdxBlogPost___banner___childMdx___children',
  childMdxBlogPost___bannerStyle = 'childMdxBlogPost___bannerStyle',
  childMdxBlogPost___hasNonDefaultSocialImageUrl = 'childMdxBlogPost___hasNonDefaultSocialImageUrl',
  childMdxBlogPost___socialImageUrl = 'childMdxBlogPost___socialImageUrl',
  childMdxBlogPost___isDraft = 'childMdxBlogPost___isDraft',
  childMdxBlogPost___reviewers = 'childMdxBlogPost___reviewers',
  childMdxBlogPost___reviewers___url = 'childMdxBlogPost___reviewers___url',
  childMdxBlogPost___reviewers___name = 'childMdxBlogPost___reviewers___name',
  childMdxBlogPost___externalLinks___devto = 'childMdxBlogPost___externalLinks___devto',
  childMdxBlogPost___externalLinks___canonical = 'childMdxBlogPost___externalLinks___canonical',
  childMdxBlogPost___externalLinks___github = 'childMdxBlogPost___externalLinks___github',
  childMdxBlogPost___slug = 'childMdxBlogPost___slug',
  childMdxBlogPost___langKey = 'childMdxBlogPost___langKey',
  childMdxBlogPost___publisher___id = 'childMdxBlogPost___publisher___id',
  childMdxBlogPost___publisher___url = 'childMdxBlogPost___publisher___url',
  childMdxBlogPost___publisher___name = 'childMdxBlogPost___publisher___name',
  childMdxBlogPost___publisher___logoUrl = 'childMdxBlogPost___publisher___logoUrl',
  childMdxBlogPost___date = 'childMdxBlogPost___date',
  childMdxBlogPost___dateModified = 'childMdxBlogPost___dateModified',
  childMdxBlogPost___tags = 'childMdxBlogPost___tags',
  childMdxBlogPost___category = 'childMdxBlogPost___category',
  childMdxBlogPost___categorySlug = 'childMdxBlogPost___categorySlug',
  childMdxBlogPost___description = 'childMdxBlogPost___description',
  childMdxBlogPost___keywords = 'childMdxBlogPost___keywords',
  childMdxBlogPost___tableOfContents = 'childMdxBlogPost___tableOfContents',
  childMdxBlogPost___excerpt = 'childMdxBlogPost___excerpt',
  childMdxBlogPost___body = 'childMdxBlogPost___body',
  childMdxBlogPost___parent___id = 'childMdxBlogPost___parent___id',
  childMdxBlogPost___parent___parent___id = 'childMdxBlogPost___parent___parent___id',
  childMdxBlogPost___parent___parent___children = 'childMdxBlogPost___parent___parent___children',
  childMdxBlogPost___parent___children = 'childMdxBlogPost___parent___children',
  childMdxBlogPost___parent___children___id = 'childMdxBlogPost___parent___children___id',
  childMdxBlogPost___parent___children___children = 'childMdxBlogPost___parent___children___children',
  childMdxBlogPost___parent___internal___content = 'childMdxBlogPost___parent___internal___content',
  childMdxBlogPost___parent___internal___contentDigest = 'childMdxBlogPost___parent___internal___contentDigest',
  childMdxBlogPost___parent___internal___description = 'childMdxBlogPost___parent___internal___description',
  childMdxBlogPost___parent___internal___fieldOwners = 'childMdxBlogPost___parent___internal___fieldOwners',
  childMdxBlogPost___parent___internal___ignoreType = 'childMdxBlogPost___parent___internal___ignoreType',
  childMdxBlogPost___parent___internal___mediaType = 'childMdxBlogPost___parent___internal___mediaType',
  childMdxBlogPost___parent___internal___owner = 'childMdxBlogPost___parent___internal___owner',
  childMdxBlogPost___parent___internal___type = 'childMdxBlogPost___parent___internal___type',
  childMdxBlogPost___children = 'childMdxBlogPost___children',
  childMdxBlogPost___children___id = 'childMdxBlogPost___children___id',
  childMdxBlogPost___children___parent___id = 'childMdxBlogPost___children___parent___id',
  childMdxBlogPost___children___parent___children = 'childMdxBlogPost___children___parent___children',
  childMdxBlogPost___children___children = 'childMdxBlogPost___children___children',
  childMdxBlogPost___children___children___id = 'childMdxBlogPost___children___children___id',
  childMdxBlogPost___children___children___children = 'childMdxBlogPost___children___children___children',
  childMdxBlogPost___children___internal___content = 'childMdxBlogPost___children___internal___content',
  childMdxBlogPost___children___internal___contentDigest = 'childMdxBlogPost___children___internal___contentDigest',
  childMdxBlogPost___children___internal___description = 'childMdxBlogPost___children___internal___description',
  childMdxBlogPost___children___internal___fieldOwners = 'childMdxBlogPost___children___internal___fieldOwners',
  childMdxBlogPost___children___internal___ignoreType = 'childMdxBlogPost___children___internal___ignoreType',
  childMdxBlogPost___children___internal___mediaType = 'childMdxBlogPost___children___internal___mediaType',
  childMdxBlogPost___children___internal___owner = 'childMdxBlogPost___children___internal___owner',
  childMdxBlogPost___children___internal___type = 'childMdxBlogPost___children___internal___type',
  childMdxBlogPost___internal___content = 'childMdxBlogPost___internal___content',
  childMdxBlogPost___internal___contentDigest = 'childMdxBlogPost___internal___contentDigest',
  childMdxBlogPost___internal___description = 'childMdxBlogPost___internal___description',
  childMdxBlogPost___internal___fieldOwners = 'childMdxBlogPost___internal___fieldOwners',
  childMdxBlogPost___internal___ignoreType = 'childMdxBlogPost___internal___ignoreType',
  childMdxBlogPost___internal___mediaType = 'childMdxBlogPost___internal___mediaType',
  childMdxBlogPost___internal___owner = 'childMdxBlogPost___internal___owner',
  childMdxBlogPost___internal___type = 'childMdxBlogPost___internal___type',
}

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>
  frontmatter?: Maybe<MdxFrontmatterFilterInput>
  slug?: Maybe<StringQueryOperatorInput>
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
  category?: Maybe<Scalars['String']>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  banner?: Maybe<File>
  bannerStyle?: Maybe<Scalars['String']>
  externalLinks?: Maybe<MdxFrontmatterExternalLinks>
  publisher?: Maybe<MdxFrontmatterPublisher>
  description?: Maybe<Scalars['String']>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
  isDraft?: Maybe<Scalars['Boolean']>
  slug?: Maybe<Scalars['String']>
  reviewers?: Maybe<Array<Maybe<MdxFrontmatterReviewers>>>
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
  devto?: Maybe<Scalars['String']>
}

export type MdxFrontmatterExternalLinksFilterInput = {
  canonical?: Maybe<StringQueryOperatorInput>
  devto?: Maybe<StringQueryOperatorInput>
}

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  date?: Maybe<DateQueryOperatorInput>
  category?: Maybe<StringQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  banner?: Maybe<FileFilterInput>
  bannerStyle?: Maybe<StringQueryOperatorInput>
  externalLinks?: Maybe<MdxFrontmatterExternalLinksFilterInput>
  publisher?: Maybe<MdxFrontmatterPublisherFilterInput>
  description?: Maybe<StringQueryOperatorInput>
  keywords?: Maybe<StringQueryOperatorInput>
  isDraft?: Maybe<BooleanQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  reviewers?: Maybe<MdxFrontmatterReviewersFilterListInput>
}

export type MdxFrontmatterPublisher = {
  __typename?: 'MdxFrontmatterPublisher'
  name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  logoUrl?: Maybe<Scalars['String']>
}

export type MdxFrontmatterPublisherFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  logoUrl?: Maybe<StringQueryOperatorInput>
}

export type MdxFrontmatterReviewers = {
  __typename?: 'MdxFrontmatterReviewers'
  name?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type MdxFrontmatterReviewersFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
}

export type MdxFrontmatterReviewersFilterListInput = {
  elemMatch?: Maybe<MdxFrontmatterReviewersFilterInput>
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

export type Person = {
  __typename?: 'Person'
  url: Scalars['String']
  name: Scalars['String']
}

export type PersonFilterInput = {
  url?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
}

export type PersonFilterListInput = {
  elemMatch?: Maybe<PersonFilterInput>
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
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY',
}

export type Publisher = {
  __typename?: 'Publisher'
  id: Scalars['ID']
  url: Scalars['String']
  name: Scalars['String']
  logoUrl: Scalars['String']
}

export type PublisherFilterInput = {
  id?: Maybe<IdQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  logoUrl?: Maybe<StringQueryOperatorInput>
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
  hasNonDefaultSocialImageUrl?: Maybe<BooleanQueryOperatorInput>
  socialImageUrl?: Maybe<StringQueryOperatorInput>
  isDraft?: Maybe<BooleanQueryOperatorInput>
  reviewers?: Maybe<PersonFilterListInput>
  externalLinks?: Maybe<ExternalLinksFilterInput>
  slug?: Maybe<StringQueryOperatorInput>
  langKey?: Maybe<LangKeyQueryOperatorInput>
  publisher?: Maybe<PublisherFilterInput>
  date?: Maybe<DateQueryOperatorInput>
  dateModified?: Maybe<DateQueryOperatorInput>
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
  slug?: Maybe<StringQueryOperatorInput>
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
  hasNonDefaultSocialImageUrl?: Maybe<BooleanQueryOperatorInput>
  socialImageUrl?: Maybe<StringQueryOperatorInput>
  isDraft?: Maybe<BooleanQueryOperatorInput>
  reviewers?: Maybe<PersonFilterListInput>
  externalLinks?: Maybe<ExternalLinksFilterInput>
  slug?: Maybe<StringQueryOperatorInput>
  langKey?: Maybe<LangKeyQueryOperatorInput>
  publisher?: Maybe<PublisherFilterInput>
  date?: Maybe<DateQueryOperatorInput>
  dateModified?: Maybe<DateQueryOperatorInput>
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
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  buildTime = 'buildTime',
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
  buildTime = 'buildTime',
  siteMetadata___siteUrl = 'siteMetadata___siteUrl',
  siteMetadata___githubRepoUrl = 'siteMetadata___githubRepoUrl',
  siteMetadata___author = 'siteMetadata___author',
  siteMetadata___twitterUrl = 'siteMetadata___twitterUrl',
  siteMetadata___title = 'siteMetadata___title',
  siteMetadata___description = 'siteMetadata___description',
  siteMetadata___keywords = 'siteMetadata___keywords',
  siteMetadata___locale___defaultLangKey = 'siteMetadata___locale___defaultLangKey',
  siteMetadata___locale___supportedLanguages___en = 'siteMetadata___locale___supportedLanguages___en',
  siteMetadata___locale___supportedLanguages___pt_br = 'siteMetadata___locale___supportedLanguages___pt_br',
  port = 'port',
  host = 'host',
  pathPrefix = 'pathPrefix',
  polyfill = 'polyfill',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
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
  id?: Maybe<Scalars['String']>
  langKey?: Maybe<Scalars['String']>
  globalBlogPostId?: Maybe<Scalars['String']>
  langKeySlug?: Maybe<Scalars['String']>
  prev?: Maybe<SitePageContextPrev>
  next?: Maybe<SitePageContextNext>
  pageEntries?: Maybe<Array<Maybe<Scalars['String']>>>
  pagination?: Maybe<SitePageContextPagination>
  categories?: Maybe<Array<Maybe<SitePageContextCategories>>>
  activeCategory?: Maybe<SitePageContextActiveCategory>
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
  id?: Maybe<StringQueryOperatorInput>
  langKey?: Maybe<StringQueryOperatorInput>
  globalBlogPostId?: Maybe<StringQueryOperatorInput>
  langKeySlug?: Maybe<StringQueryOperatorInput>
  prev?: Maybe<SitePageContextPrevFilterInput>
  next?: Maybe<SitePageContextNextFilterInput>
  pageEntries?: Maybe<StringQueryOperatorInput>
  pagination?: Maybe<SitePageContextPaginationFilterInput>
  categories?: Maybe<SitePageContextCategoriesFilterListInput>
  activeCategory?: Maybe<SitePageContextActiveCategoryFilterInput>
  categoriesByCategorySlug?: Maybe<SitePageContextCategoriesByCategorySlugFilterInput>
  tag?: Maybe<StringQueryOperatorInput>
  tags?: Maybe<SitePageContextTagsFilterListInput>
}

export type SitePageContextNext = {
  __typename?: 'SitePageContextNext'
  title?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
}

export type SitePageContextNextFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
}

export type SitePageContextPagination = {
  __typename?: 'SitePageContextPagination'
  pageEntries?: Maybe<Array<Maybe<Scalars['String']>>>
  currentPageIndex?: Maybe<Scalars['Int']>
  nextPagePath?: Maybe<Scalars['String']>
  previousPagePath?: Maybe<Scalars['String']>
  pageCount?: Maybe<Scalars['Int']>
  pathPrefix?: Maybe<Scalars['String']>
  totalCount?: Maybe<Scalars['Int']>
}

export type SitePageContextPaginationFilterInput = {
  pageEntries?: Maybe<StringQueryOperatorInput>
  currentPageIndex?: Maybe<IntQueryOperatorInput>
  nextPagePath?: Maybe<StringQueryOperatorInput>
  previousPagePath?: Maybe<StringQueryOperatorInput>
  pageCount?: Maybe<IntQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  totalCount?: Maybe<IntQueryOperatorInput>
}

export type SitePageContextPrev = {
  __typename?: 'SitePageContextPrev'
  title?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
}

export type SitePageContextPrevFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
}

export type SitePageContextTags = {
  __typename?: 'SitePageContextTags'
  tag?: Maybe<Scalars['String']>
  langKey?: Maybe<Scalars['String']>
  postsCount?: Maybe<Scalars['Int']>
}

export type SitePageContextTagsFilterInput = {
  tag?: Maybe<StringQueryOperatorInput>
  langKey?: Maybe<StringQueryOperatorInput>
  postsCount?: Maybe<IntQueryOperatorInput>
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
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___id = 'context___id',
  context___langKey = 'context___langKey',
  context___globalBlogPostId = 'context___globalBlogPostId',
  context___langKeySlug = 'context___langKeySlug',
  context___prev___title = 'context___prev___title',
  context___prev___slug = 'context___prev___slug',
  context___next___title = 'context___next___title',
  context___next___slug = 'context___next___slug',
  context___pageEntries = 'context___pageEntries',
  context___pagination___pageEntries = 'context___pagination___pageEntries',
  context___pagination___currentPageIndex = 'context___pagination___currentPageIndex',
  context___pagination___nextPagePath = 'context___pagination___nextPagePath',
  context___pagination___previousPagePath = 'context___pagination___previousPagePath',
  context___pagination___pageCount = 'context___pagination___pageCount',
  context___pagination___pathPrefix = 'context___pagination___pathPrefix',
  context___pagination___totalCount = 'context___pagination___totalCount',
  context___categories = 'context___categories',
  context___categories___category = 'context___categories___category',
  context___categories___categorySlug = 'context___categories___categorySlug',
  context___activeCategory___category = 'context___activeCategory___category',
  context___activeCategory___categorySlug = 'context___activeCategory___categorySlug',
  context___categoriesByCategorySlug___programming___category = 'context___categoriesByCategorySlug___programming___category',
  context___categoriesByCategorySlug___programming___categorySlug = 'context___categoriesByCategorySlug___programming___categorySlug',
  context___categoriesByCategorySlug___programacao___category = 'context___categoriesByCategorySlug___programacao___category',
  context___categoriesByCategorySlug___programacao___categorySlug = 'context___categoriesByCategorySlug___programacao___categorySlug',
  context___tag = 'context___tag',
  context___tags = 'context___tags',
  context___tags___tag = 'context___tags___tag',
  context___tags___langKey = 'context___tags___langKey',
  context___tags___postsCount = 'context___tags___postsCount',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___version = 'pluginCreator___version',
  pluginCreator___pluginOptions___isTSX = 'pluginCreator___pluginOptions___isTSX',
  pluginCreator___pluginOptions___allExtensions = 'pluginCreator___pluginOptions___allExtensions',
  pluginCreator___pluginOptions___name = 'pluginCreator___pluginOptions___name',
  pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
  pluginCreator___pluginOptions___extensions = 'pluginCreator___pluginOptions___extensions',
  pluginCreator___pluginOptions___gatsbyRemarkPlugins = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins',
  pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve',
  pluginCreator___pluginOptions___remarkPlugins = 'pluginCreator___pluginOptions___remarkPlugins',
  pluginCreator___pluginOptions___rehypePlugins = 'pluginCreator___pluginOptions___rehypePlugins',
  pluginCreator___pluginOptions___rehypePlugins___behavior = 'pluginCreator___pluginOptions___rehypePlugins___behavior',
  pluginCreator___pluginOptions___short_name = 'pluginCreator___pluginOptions___short_name',
  pluginCreator___pluginOptions___start_url = 'pluginCreator___pluginOptions___start_url',
  pluginCreator___pluginOptions___background_color = 'pluginCreator___pluginOptions___background_color',
  pluginCreator___pluginOptions___theme_color = 'pluginCreator___pluginOptions___theme_color',
  pluginCreator___pluginOptions___display = 'pluginCreator___pluginOptions___display',
  pluginCreator___pluginOptions___icon = 'pluginCreator___pluginOptions___icon',
  pluginCreator___pluginOptions___cache_busting_mode = 'pluginCreator___pluginOptions___cache_busting_mode',
  pluginCreator___pluginOptions___include_favicon = 'pluginCreator___pluginOptions___include_favicon',
  pluginCreator___pluginOptions___legacy = 'pluginCreator___pluginOptions___legacy',
  pluginCreator___pluginOptions___theme_color_in_head = 'pluginCreator___pluginOptions___theme_color_in_head',
  pluginCreator___pluginOptions___trackingId = 'pluginCreator___pluginOptions___trackingId',
  pluginCreator___pluginOptions___head = 'pluginCreator___pluginOptions___head',
  pluginCreator___pluginOptions___anonymize = 'pluginCreator___pluginOptions___anonymize',
  pluginCreator___pluginOptions___respectDNT = 'pluginCreator___pluginOptions___respectDNT',
  pluginCreator___pluginOptions___defer = 'pluginCreator___pluginOptions___defer',
  pluginCreator___pluginOptions___output = 'pluginCreator___pluginOptions___output',
  pluginCreator___pluginOptions___exclude = 'pluginCreator___pluginOptions___exclude',
  pluginCreator___pluginOptions___query = 'pluginCreator___pluginOptions___query',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator___packageJson___name',
  pluginCreator___packageJson___description = 'pluginCreator___packageJson___description',
  pluginCreator___packageJson___version = 'pluginCreator___packageJson___version',
  pluginCreator___packageJson___main = 'pluginCreator___packageJson___main',
  pluginCreator___packageJson___author = 'pluginCreator___packageJson___author',
  pluginCreator___packageJson___license = 'pluginCreator___packageJson___license',
  pluginCreator___packageJson___dependencies = 'pluginCreator___packageJson___dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator___packageJson___dependencies___name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator___packageJson___dependencies___version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator___packageJson___devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator___packageJson___devDependencies___name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator___packageJson___devDependencies___version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator___packageJson___peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator___packageJson___peerDependencies___name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator___packageJson___peerDependencies___version',
  pluginCreator___packageJson___keywords = 'pluginCreator___packageJson___keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
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
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___isTSX = 'pluginOptions___isTSX',
  pluginOptions___allExtensions = 'pluginOptions___allExtensions',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___extensions = 'pluginOptions___extensions',
  pluginOptions___gatsbyRemarkPlugins = 'pluginOptions___gatsbyRemarkPlugins',
  pluginOptions___gatsbyRemarkPlugins___resolve = 'pluginOptions___gatsbyRemarkPlugins___resolve',
  pluginOptions___gatsbyRemarkPlugins___options___maxWidth = 'pluginOptions___gatsbyRemarkPlugins___options___maxWidth',
  pluginOptions___gatsbyRemarkPlugins___options___disableBgImageOnAlpha = 'pluginOptions___gatsbyRemarkPlugins___options___disableBgImageOnAlpha',
  pluginOptions___gatsbyRemarkPlugins___options___quality = 'pluginOptions___gatsbyRemarkPlugins___options___quality',
  pluginOptions___gatsbyRemarkPlugins___options___classPrefix = 'pluginOptions___gatsbyRemarkPlugins___options___classPrefix',
  pluginOptions___gatsbyRemarkPlugins___options___inlineCodeMarker = 'pluginOptions___gatsbyRemarkPlugins___options___inlineCodeMarker',
  pluginOptions___remarkPlugins = 'pluginOptions___remarkPlugins',
  pluginOptions___remarkPlugins___external___table = 'pluginOptions___remarkPlugins___external___table',
  pluginOptions___remarkPlugins___external___code = 'pluginOptions___remarkPlugins___external___code',
  pluginOptions___remarkPlugins___internal___blockquote = 'pluginOptions___remarkPlugins___internal___blockquote',
  pluginOptions___remarkPlugins___internal___image = 'pluginOptions___remarkPlugins___internal___image',
  pluginOptions___rehypePlugins = 'pluginOptions___rehypePlugins',
  pluginOptions___rehypePlugins___behavior = 'pluginOptions___rehypePlugins___behavior',
  pluginOptions___rehypePlugins___content___type = 'pluginOptions___rehypePlugins___content___type',
  pluginOptions___rehypePlugins___content___tagName = 'pluginOptions___rehypePlugins___content___tagName',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___background_color = 'pluginOptions___background_color',
  pluginOptions___theme_color = 'pluginOptions___theme_color',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icon = 'pluginOptions___icon',
  pluginOptions___cache_busting_mode = 'pluginOptions___cache_busting_mode',
  pluginOptions___include_favicon = 'pluginOptions___include_favicon',
  pluginOptions___legacy = 'pluginOptions___legacy',
  pluginOptions___theme_color_in_head = 'pluginOptions___theme_color_in_head',
  pluginOptions___trackingId = 'pluginOptions___trackingId',
  pluginOptions___head = 'pluginOptions___head',
  pluginOptions___anonymize = 'pluginOptions___anonymize',
  pluginOptions___respectDNT = 'pluginOptions___respectDNT',
  pluginOptions___defer = 'pluginOptions___defer',
  pluginOptions___output = 'pluginOptions___output',
  pluginOptions___exclude = 'pluginOptions___exclude',
  pluginOptions___query = 'pluginOptions___query',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___dependencies___name = 'packageJson___dependencies___name',
  packageJson___dependencies___version = 'packageJson___dependencies___version',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___devDependencies___name = 'packageJson___devDependencies___name',
  packageJson___devDependencies___version = 'packageJson___devDependencies___version',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___peerDependencies___name = 'packageJson___peerDependencies___name',
  packageJson___peerDependencies___version = 'packageJson___peerDependencies___version',
  packageJson___keywords = 'packageJson___keywords',
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
  trackingId?: Maybe<Scalars['String']>
  head?: Maybe<Scalars['Boolean']>
  anonymize?: Maybe<Scalars['Boolean']>
  respectDNT?: Maybe<Scalars['Boolean']>
  defer?: Maybe<Scalars['Boolean']>
  output?: Maybe<Scalars['String']>
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>
  query?: Maybe<Scalars['String']>
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
  trackingId?: Maybe<StringQueryOperatorInput>
  head?: Maybe<BooleanQueryOperatorInput>
  anonymize?: Maybe<BooleanQueryOperatorInput>
  respectDNT?: Maybe<BooleanQueryOperatorInput>
  defer?: Maybe<BooleanQueryOperatorInput>
  output?: Maybe<StringQueryOperatorInput>
  exclude?: Maybe<StringQueryOperatorInput>
  query?: Maybe<StringQueryOperatorInput>
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
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>
  quality?: Maybe<Scalars['Int']>
  classPrefix?: Maybe<Scalars['String']>
  inlineCodeMarker?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>
  quality?: Maybe<IntQueryOperatorInput>
  classPrefix?: Maybe<StringQueryOperatorInput>
  inlineCodeMarker?: Maybe<StringQueryOperatorInput>
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
  className?: Maybe<Array<Maybe<Scalars['String']>>>
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
  twitterUrl?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
  locale?: Maybe<SiteSiteMetadataLocale>
}

export type SiteSiteMetadataFilterInput = {
  siteUrl?: Maybe<StringQueryOperatorInput>
  githubRepoUrl?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  twitterUrl?: Maybe<StringQueryOperatorInput>
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
  ASC = 'ASC',
  DESC = 'DESC',
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

export type PagesQueryVariables = Exact<{ [key: string]: never }>

export type PagesQuery = { __typename?: 'Query' } & {
  allSitePage: { __typename?: 'SitePageConnection' } & {
    nodes: Array<{ __typename?: 'SitePage' } & Pick<SitePage, 'path'>>
  }
}

export type HeaderQueryVariables = Exact<{ [key: string]: never }>

export type HeaderQuery = { __typename?: 'Query' } & {
  allBlogPost: { __typename?: 'BlogPostConnection' } & {
    group: Array<
      { __typename?: 'BlogPostGroupConnection' } & Pick<
        BlogPostGroupConnection,
        'field' | 'fieldValue'
      > & {
          nodes: Array<{ __typename?: 'MdxBlogPost' } & Pick<MdxBlogPost, 'id' | 'title'>>
        }
    >
  }
}

export type LogoImageQueryVariables = Exact<{ [key: string]: never }>

export type LogoImageQuery = { __typename?: 'Query' } & {
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

export type DefaultSeoQueryVariables = Exact<{ [key: string]: never }>

export type DefaultSeoQuery = { __typename?: 'Query' } & {
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<
        { __typename?: 'SiteSiteMetadata' } & Pick<
          SiteSiteMetadata,
          'title' | 'description' | 'author' | 'twitterUrl' | 'keywords'
        >
      >
    }
  >
}

export type IndexQueryVariables = Exact<{
  langKey: LangKey
}>

export type IndexQuery = { __typename?: 'Query' } & {
  allBlogPost: { __typename?: 'BlogPostConnection' } & {
    edges: Array<
      { __typename?: 'BlogPostEdge' } & {
        node: { __typename?: 'MdxBlogPost' } & Pick<
          MdxBlogPost,
          'id' | 'excerpt' | 'title' | 'date' | 'slug'
        >
      }
    >
  }
}

export type BlogQueryVariables = Exact<{
  pageEntries: Array<Scalars['String']>
}>

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

export type CategoryQueryVariables = Exact<{
  langKey: LangKey
  pageEntries: Array<Scalars['String']>
}>

export type CategoryQuery = { __typename?: 'Query' } & {
  allBlogPost: { __typename?: 'BlogPostConnection' } & {
    edges: Array<
      { __typename?: 'BlogPostEdge' } & {
        node: { __typename?: 'MdxBlogPost' } & Pick<
          MdxBlogPost,
          'id' | 'title' | 'description' | 'excerpt' | 'date' | 'keywords' | 'slug'
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

export type PostQueryVariables = Exact<{
  id: Scalars['String']
  globalBlogPostId: Scalars['ID']
  langKeySlug: Scalars['String']
}>

export type PostQuery = { __typename?: 'Query' } & {
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
      | 'isDraft'
      | 'langKey'
      | 'bannerStyle'
      | 'socialImageUrl'
      | 'keywords'
      | 'description'
      | 'excerpt'
      | 'slug'
      | 'category'
      | 'categorySlug'
      | 'globalBlogPostId'
      | 'tags'
      | 'body'
    > & {
        dateISOString: MdxBlogPost['date']
        dateModifiedISOString: MdxBlogPost['dateModified']
      } & {
        banner?: Maybe<
          { __typename?: 'File' } & {
            childImageSharp?: Maybe<
              { __typename?: 'ImageSharp' } & {
                fluid?: Maybe<{ __typename?: 'ImageSharpFluid' } & GatsbyImageSharpFluid>
              }
            >
          }
        >
        publisher?: Maybe<
          { __typename?: 'Publisher' } & Pick<
            Publisher,
            'id' | 'name' | 'url' | 'logoUrl'
          >
        >
        reviewers: Array<{ __typename?: 'Person' } & Pick<Person, 'name' | 'url'>>
        externalLinks: { __typename?: 'ExternalLinks' } & Pick<
          ExternalLinks,
          'devto' | 'github' | 'canonical'
        >
      }
  >
}

export type TagQueryVariables = Exact<{
  langKey: LangKey
  tag: Scalars['String']
}>

export type TagQuery = { __typename?: 'Query' } & {
  allBlogPost: { __typename?: 'BlogPostConnection' } & {
    edges: Array<
      { __typename?: 'BlogPostEdge' } & {
        node: { __typename?: 'MdxBlogPost' } & Pick<
          MdxBlogPost,
          'id' | 'title' | 'description' | 'excerpt' | 'date' | 'keywords' | 'slug'
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
