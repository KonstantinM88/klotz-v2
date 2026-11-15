import {
  featuredArticles,
  featuredProjects,
  primaryNavigation,
  processSteps,
  secondaryNavigation,
  serviceCategories,
  siteSettings,
} from "@/content/site";
import type { ContentRepository } from "@/repositories/content-repository";
import { overviewPages } from "@/content/pages";
import { serviceDetails } from "@/content/services";
import { articleBodies } from "@/content/articles";
import { homeContent } from "@/content/home";
import { companyPageContent } from "@/content/company";
import assetManifest from "../../content/assets-manifest.json";
import { offerPages } from "@/content/offers";
import { terracePageContent } from "@/content/terrace";
import { terraceServicePages } from "@/content/terrace-services";
import { windowsPageContent } from "@/content/windows";
import { windowsServicePages } from "@/content/windows-services";
import { fencePageContent } from "@/content/fence";
import { fenceServicePages } from "@/content/fence-services";

function withAsset<
  T extends {
    image: { src: string; width: number; height: number; rightsStatus: string };
  },
>(entity: T): T {
  const asset = assetManifest.find((a) => a.src === entity.image.src);
  return asset
    ? {
        ...entity,
        image: {
          ...entity.image,
          width: asset.width,
          height: asset.height,
          rightsStatus: "client-presentation-approved",
        },
      }
    : entity;
}

export const localContentRepository: ContentRepository = {
  async getFencePageContent() {
    return fencePageContent;
  },
  async getFenceServicePages() {
    return fenceServicePages;
  },
  async getWindowsPageContent() {
    return windowsPageContent;
  },
  async getWindowsServicePages() {
    return windowsServicePages;
  },
  async getTerraceServicePages() {
    return terraceServicePages;
  },
  async getTerracePageContent() {
    return terracePageContent;
  },
  async getOfferPages() {
    return offerPages;
  },
  async getOfferPage(slug) {
    return offerPages.find((offer) => offer.slug === slug);
  },
  async getCompanyPageContent() {
    return companyPageContent;
  },
  async getHomeContent() {
    return homeContent;
  },
  async getOverviewPages() {
    return overviewPages;
  },
  async getServices() {
    return serviceDetails;
  },
  async getArticleBody(slug) {
    return articleBodies.find((a) => a.slug === slug);
  },
  async getSiteSettings() {
    return siteSettings;
  },
  async getPrimaryNavigation() {
    return primaryNavigation;
  },
  async getSecondaryNavigation() {
    return secondaryNavigation;
  },
  async getServiceCategories() {
    return serviceCategories.map(withAsset);
  },
  async getFeaturedProjects() {
    return featuredProjects.map(withAsset);
  },
  async getFeaturedArticles() {
    return featuredArticles;
  },
  async getProcessSteps() {
    return processSteps;
  },
};
