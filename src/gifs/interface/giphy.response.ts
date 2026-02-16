export interface GiphyResponse {
  data: GiphyGif[];
  meta: Meta;
  pagination: Pagination;
}

export interface GiphyGif {
  type: Type;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: Rating;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;

  import_datetime: string;
  trending_datetime: string;

  images: Images;
  analytics_response_payload: string;
  analytics: Analytics;
  alt_text: string;
  is_low_contrast: boolean;
}

export type Rating = "g" | "pg" | "pg-13" | "r";

export type Type = "gif";
export interface Analytics {
  onload: AnalyticsAction;
  onclick: AnalyticsAction;
  onsent: AnalyticsAction;
}

export interface AnalyticsAction {
  url: string;
}

export interface Images {
  original: ImageFull;
  downsized: ImageVariant;
  downsized_large: ImageVariant;
  downsized_medium: ImageVariant;
  downsized_small: VideoVariant;
  downsized_still: ImageVariant;

  fixed_height: ImageFull;
  fixed_height_downsampled: ImageFull;
  fixed_height_small: ImageFull;
  fixed_height_small_still: ImageVariant;
  fixed_height_still: ImageVariant;

  fixed_width: ImageFull;
  fixed_width_downsampled: ImageFull;
  fixed_width_small: ImageFull;
  fixed_width_small_still: ImageVariant;
  fixed_width_still: ImageVariant;

  looping: VideoVariant;
  original_still: ImageVariant;
  original_mp4: VideoVariant;

  preview: VideoVariant;
  preview_gif: ImageVariant;
  preview_webp: ImageVariant;

  "480w_still": ImageVariant;
}

export interface ImageVariant {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface VideoVariant {
  height: string;
  width: string;
  mp4_size: string;
  mp4: string;
}

export interface ImageFull {
  height: string;
  width: string;
  size: string;
  url: string;

  mp4?: string;
  mp4_size?: string;

  webp: string;
  webp_size: string;

  frames?: string;
  hash?: string;
}
export interface Meta {
  status: number;
  msg: string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}
