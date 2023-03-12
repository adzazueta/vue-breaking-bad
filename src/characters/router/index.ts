import type { RouteRecordRaw } from "vue-router";

import CharacterLayout from "@/characters/layout/CharacterLayout.vue";
import CharacterId from "@/characters/pages/CharacterId.vue";
import CharacterList from "@/characters/pages/CharacterList.vue";
import CharacterSearch from "@/characters/pages/CharacterSearch.vue";

const charactersRoute: RouteRecordRaw = {
  path: '/characters',
  redirect: '/characters/list',
  component: CharacterLayout,
  children: [
    {
      path: 'by/id',
      name: 'character-id',
      props: { title: 'By Id', visible: false },
      component: CharacterId
    },
    {
      path: 'list',
      name: 'character-list',
      props: { title: 'List', visible: true },
      component: CharacterList
    },
    {
      path: 'search',
      name: 'character-search',
      props: { title: 'Search', visible: true },
      component: CharacterSearch
    }
  ]
}

export default charactersRoute