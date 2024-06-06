<template>
  <h1 class="text-left font-semibold ml-60 mb-5 text-3xl">{{data.local_name}}</h1>
<DamageChart :monsterbodyparts="data.monsterbodyparts" :weaponspecialattacks="data.weaponspecialattacks"
                 :itemeffects="data.itemeffects" :canopytrap="data.canopytrap" />
    <QuestChart :quests="data.quests"/>
    <DropChart :items="data.items" />
    <EquipChart :weapons="data.weapons" />
</template>

<script setup>
import DamageChart from '@/components/DamageChart.vue';
import QuestChart from '@/components/QuestChart.vue';
import EquipChart from '@/components/EquipChart.vue';
import DropChart from '@/components/DropChart.vue';

</script>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      data: {},
    };
  },
  methods: {
    async getMon(route) {
      const res = await axios.get("http://localhost:8080/api/get/monster/" + route);
      this.data = res.data;
    }
  },
  beforeMount() {
    this.getMon(this.$route.params.id);
  },
};
</script>