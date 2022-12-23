// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Home documents */
interface HomeDocumentData {
    /**
     * Subtitle Hero field in *Home*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.subtitle_hero
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    subtitle_hero: prismicT.KeyTextField;
    /**
     * Titulo Hero field in *Home*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.title_hero
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title_hero: prismicT.KeyTextField;
    /**
     * Descrição Hero field in *Home*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.description_hero
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description_hero: prismicT.RichTextField;
    /**
     * Titulo Botão field in *Home*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.label_button
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label_button: prismicT.KeyTextField;
    /**
     * Url botão field in *Home*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: home.url_button
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    url_button: prismicT.LinkField;
    /**
     * Titulo Trailer field in *Home*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.label_trailer
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label_trailer: prismicT.KeyTextField;
    /**
     * Imagem Trailer field in *Home*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home.thumb_trailer
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    thumb_trailer: prismicT.ImageField<never>;
}
/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;
/** Content for Personagens documents */
interface PersonagensDocumentData {
    /**
     * Slug field in *Personagens*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: personagens.slug
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    slug: prismicT.KeyTextField;
    /**
     * Imagem personagem field in *Personagens*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: personagens.imagem_personagem
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    imagem_personagem: prismicT.ImageField<never>;
    /**
     * Nome personagem field in *Personagens*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: personagens.nome_personagem
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    nome_personagem: prismicT.KeyTextField;
    /**
     * Descrição Personagem field in *Personagens*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: personagens.descricao_personagem
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    descricao_personagem: prismicT.RichTextField;
}
/**
 * Personagens document from Prismic
 *
 * - **API ID**: `personagens`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PersonagensDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PersonagensDocumentData>, "personagens", Lang>;
export type AllDocumentTypes = HomeDocument | PersonagensDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomeDocumentData, HomeDocument, PersonagensDocumentData, PersonagensDocument, AllDocumentTypes };
    }
}
