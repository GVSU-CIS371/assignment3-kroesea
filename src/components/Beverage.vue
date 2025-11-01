<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <Creamer v-if="store.currentCreamer.id !== 'c1'" />
      </template>
      <template v-slot:mid>
        <Syrup v-if="store.currentSyrup.id !== 's1'" />
      </template>
      <template v-slot:bottom>
        <Base />
      </template>
    </Contents>
  </Mug>
</template>

<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";
import { useBeverageStore } from "../stores/beverageStore";

const store = useBeverageStore();

type Props = {
  isIced: boolean;
};

defineProps<Props>();
</script>