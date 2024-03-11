export interface CardCont {
  content?: ContentItem[];
  content_guide_amount?: number;
  content_last?: ContentItem;
  created?: string;
  guide_step?: string;
  name?: string;
  telegram?: string;
  updated?: string;
  course?: string;
}

export interface ContentItem {
  created: string;
  file: string;
  guide: boolean;
  id: string;
  link: string;
  updated: string;
}

export interface ContentProp {
  new: CardCont[];
  in_progress: CardCont[];
  done: CardCont[];
}

export interface ContentFile {
  id: string;
  url: string;
}

export interface ContentLink {
  id: string;
  url: string;
}
