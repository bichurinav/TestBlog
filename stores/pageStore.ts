import { defineStore } from 'pinia'

export interface MetaPage {
  title: string,
  description: string,
  slug: string
}

export interface BlockPage {
  type: string,
  id: string,
  data: "" | {} | []
}

export interface PageState {
  page_type: string
  meta: MetaPage
  body: BlockPage[]
};

const baseUrl = "http://devtwit8.ru/api/v1/page/?path="

export const usePageStore = defineStore('page', {
  state: () => ({
    page_type: "",
    meta: {
      title: '',
      description: '',
      slug: ''
    },
    body: []
  } as PageState),

  actions: {
    async fetchPage(path: string): Promise<PageState> {
      const url = baseUrl + path

      return new Promise((resolve, reject) => {
          $fetch<PageState>(url)
          .then((data) => {
              this.$state.page_type = data.page_type;
              this.$state.meta = data.meta;
              this.$state.body = data.body;
              resolve(data)
          })
          .catch(reject)
      })
    }
  }
  
})