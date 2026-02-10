import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export const contentfulService = {
  async getJackets() {
    try {
      const response = await client.getEntries({
        content_type: import.meta.env.VITE_CONTENTFUL_CONTENT_TYPE,
      });

      return response.items.map((item) => ({
        id: item.sys.id,
        name: item.fields.name,
        description: item.fields.description.content[0].content[0].value,
        price: item.fields.price,
        category: item.fields.category,
        image: item.fields.image?.fields?.file?.url,
        featured: item.fields.featured || false,
      }));
    } catch (error) {
      console.error("Error fetching jackets:", error);
      return [];
    }
  },

  async getFeaturedJackets() {
    try {
      const response = await client.getEntries({
        content_type: import.meta.env.VITE_CONTENTFUL_CONTENT_TYPE,
        "fields.featured": true,
      });

      return response.items.map((item) => ({
        id: item.sys.id,
        name: item.fields.name,
        description: item.fields.description,
        price: item.fields.price,
        category: item.fields.category,
        image: item.fields.image?.fields?.file?.url,
        featured: item.fields.featured || false,
      }));
    } catch (error) {
      console.error("Error fetching featured jackets:", error);
      return [];
    }
  },
};
