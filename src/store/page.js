import {defineStore} from 'pinia'

const DEFAULT_TITLE = 'Magento Vue Frontend'

export const usePageStore = defineStore('page', {
    state: () => ({
        title: DEFAULT_TITLE,
        breadcrumbs: [],
    }),
    actions: {
        setTitle(newTitle) {
            this.title = newTitle;
            document.title = newTitle + ' | ' + DEFAULT_TITLE;
        },
    },
})
