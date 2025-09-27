import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsActivityCard extends Struct.ComponentSchema {
  collectionName: 'components_components_activity_cards';
  info: {
    displayName: 'activity_card';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    intro: Schema.Attribute.String;
    points: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsColors extends Struct.ComponentSchema {
  collectionName: 'components_components_colors';
  info: {
    displayName: 'Colors';
    icon: 'bulletList';
  };
  attributes: {
    Colors: Schema.Attribute.Enumeration<
      ['terracotta', 'stone', 'midnight', 'steel', 'mist', 'parchment']
    >;
  };
}

export interface ComponentsContent extends Struct.ComponentSchema {
  collectionName: 'components_components_contents';
  info: {
    displayName: 'content';
    icon: 'book';
  };
  attributes: {
    activity: Schema.Attribute.Component<'components.activity-card', true>;
    description: Schema.Attribute.JSON;
    description_type: Schema.Attribute.Enumeration<['list', 'text']>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsPageName extends Struct.ComponentSchema {
  collectionName: 'components_components_page_names';
  info: {
    displayName: 'page_name';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ComponentsSection extends Struct.ComponentSchema {
  collectionName: 'components_components_sections';
  info: {
    displayName: 'section';
    icon: 'bulletList';
  };
  attributes: {
    content: Schema.Attribute.Component<'components.content', true>;
    CTA: Schema.Attribute.String;
    description: Schema.Attribute.String;
    description_breakAt: Schema.Attribute.String;
    intro: Schema.Attribute.String;
    intro_breakAt: Schema.Attribute.String;
    long_description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    title_breakAt: Schema.Attribute.String;
  };
}

export interface ComponentsSection1 extends Struct.ComponentSchema {
  collectionName: 'components_components_section_1s';
  info: {
    displayName: 'section_1';
  };
  attributes: {
    intro: Schema.Attribute.String;
  };
}

export interface ComponentsTitle extends Struct.ComponentSchema {
  collectionName: 'components_components_titles';
  info: {
    displayName: 'title';
  };
  attributes: {};
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.activity-card': ComponentsActivityCard;
      'components.colors': ComponentsColors;
      'components.content': ComponentsContent;
      'components.page-name': ComponentsPageName;
      'components.section': ComponentsSection;
      'components.section-1': ComponentsSection1;
      'components.title': ComponentsTitle;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
