<script setup>
const props = defineProps(['quests']);
</script>

<template>
    <h1 class="text-left ml-60 font-semibold text-lg mb-5 mt-10">Quest Appearances</h1>
    <div class="flex justify-left items-start">
    <table class="ml-60 w-66">
        <thead>
            <tr>
                <th class="text-left w-30">Caravan</th>
                <th class="w-60"></th>
            </tr>
        </thead>
        <template v-for="(quest) in quests">
        <tr class="border border-black even:bg-white-200 odd:bg-slate-200"  v-if="quest.questguild_id == 1">
        <td class="border-r border-black pr-5">{{ quest.questguild.local_name }} {{quest.star}}</td>
        <td class="pr-5">{{ quest.local_name }}</td>
        </tr>
    </template>
    </table>

     <table class="ml-56">
        <thead>
            <tr>
                <th class="text-left w-30">Guild</th>
                <th class="w-52"></th>
            </tr>
        </thead>
        <tbody>
        <template v-for="(quest) in quests" >
        <tr class="border border-black odd:bg-white-200 even:bg-slate-200" v-if="quest.questguild_id == 2">
        <td class="border-r border-black pr-5">{{ quest.questguild.local_name }} {{ quest.star }}</td>
        <td class="pr-5">{{ quest.local_name }}</td>
        </tr>
    </template>
    </tbody>

     </table>
    </div>
</template>