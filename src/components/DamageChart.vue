<script setup>
const props = defineProps(['monsterbodyparts', 'weaponspecialattacks', 'itemeffects', 'canopytrap']);

</script>
<template>
    <p1 class="text-left ml-60 font-semibold text-lg">Damage Chart</p1>
        <div class="flex flex-wrap justify-center items-start mt-5">
    <table class="table-fixed mr-5">
      <thead>
        <tr>
          <th class="pr-5 pl-1 text-left border border-slate-700">Part</th>
          <th class="pr-5 pl-1 text-left border border-slate-700">Cut</th>
          <th class="pr-4 pl-1 text-left border border-slate-700">Impact</th>
          <th class="pr-4 pl-1 text-left border border-slate-700">Shot</th>
          <th class="pr-4 pl-1 text-left border border-slate-700">Fire</th>
          <th class="pr-4 pl-1 text-left border border-slate-700">Water</th>
          <th class="pr-4 pl-1 text-left border border-slate-700">Thunder</th>
          <th class="pr-5 pl-1 text-left border border-slate-700">Ice</th>
          <th class="pr-4 pl-1 text-left border border-slate-700">Dragon</th>
        </tr>
      </thead>
      <template v-for="part_data in monsterbodyparts">
      <tr class="even:bg-white-200 odd:bg-slate-200">
        <td class="border border-slate-700">{{ part_data.local_name }}</td>
        <td class="border border-slate-700">{{ part_data.pivot.res_cut }}</td>
        <td class="border border-slate-700">{{ part_data.pivot.res_impact }}</td>
        <td class="border border-slate-700">{{ part_data.pivot.res_shot }}</td>
        <td class="border border-slate-700">{{ part_data.pivot.res_fire }}</td>
        <td class="border border-slate-700">{{ part_data.pivot.res_water }}</td>
        <td class="border border-slate-700">{{ part_data.pivot.res_thunder }}</td>
        <td class="border border-slate-700">{{ part_data.pivot.res_ice }}</td>
        <td class="border border-slate-700">{{ part_data.pivot.res_dragon }}</td>
      </tr>
    </template>
    </table>

    <table class="table-fixed mx-5">
      <thead>
        <tr>
          <th class="pr-6 pl-1 text-left border border-slate-700">Status</th>
          <th class="pr-5 pl-1 text-left border border-slate-700">Initial</th>
          <th class="pr-5 pl-1 text-left border border-slate-700">Increase</th>
          <th class="pr-5 pl-1 text-left border border-slate-700">Max</th>
          <th class="pr-5 pl-1 text-left border border-slate-700">Duration</th>
          <th class="pr-5 pl-1 text-left border border-slate-700">Damage</th>
          <th class="pr-5 pl-1 text-left border border-slate-700">Reduction</th>
        </tr>
      </thead>
      <tr class="roweven:bg-white-200 odd:bg-slate-200" v-for="(status_data, id) in weaponspecialattacks" :key="id">
      <td class="border border-slate-700">{{ status_data.local_name }}</td>
      <td class="border border-slate-700">{{status_data.pivot.initial}}</td>
      <td class="border border-slate-700">{{status_data.pivot.increase}}</td>
      <td class="border border-slate-700">{{status_data.pivot.max}}</td>
      <td class="border border-slate-700">{{status_data.pivot.duration}}</td>
      <td class="border border-slate-700">{{ status_data.pivot.damage }}</td>
      <td class="border border-slate-700">{{ status_data.pivot.reduction_amount }}/{{ status_data.pivot.reduction_time }}sec</td>
    </tr>
    </table>
    <table class="ml-5">
      <thead>
        <tr>
          <th class="pr-20 pl-1 text-left border border-slate-700">Item</th>
          <th class="pr-5 pl-1 text-left border border-slate-700">Normal</th>
          <th class="pr-5 pl-1 text-left border border-slate-700">Enraged</th>
          <th class="pr-5 pl-1 text-left border border-slate-700">Exhausted</th>
        </tr>
      </thead>
      <tr class="even:bg-white-200 odd:bg-slate-200" v-for="(item, id) in itemeffects" :key="id">
      <td class="border border-slate-700">{{ item.local_name }}</td>
      <td class="border border-slate-700">{{ item.pivot.normal }}</td>
      <td class="border border-slate-700">{{ item.pivot.enraged }}</td>
      <td class="border border-slate-700">{{ item.pivot.fatigued }}</td>
      </tr>
      <tr>
        <td class="border border-slate-700">Canopy Trap</td>
        <td class="border border-slate-700" >{{ canopytrap.normal }}</td>
        <td class="border border-slate-700">{{canopytrap.enraged}}</td>
        <td class="border border-slate-700">{{ canopytrap.fatigued }}</td>
      </tr>
    </table>
  </div>
</template>