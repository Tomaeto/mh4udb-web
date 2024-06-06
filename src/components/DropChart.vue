<script setup>
const props = defineProps(['items']);
</script>

<template>
    <h1 class="text-left ml-60 text-lg font-semibold mt-10 mb-5">Item Drops</h1>
    <div class="flex justify-left items-start">
        <table class="ml-60 mr-36 w-52">
            <thead>
                <tr>
                    <th class="text-left">Low</th>
                </tr>
            </thead>
            <template v-for="item in items">
                <tr class="border border-black even:bg-white-200 odd:bg-slate-200" v-if="item.pivot.rank.id == 1">
                    <td class="pr-5 border-r border-black">{{ item.pivot.monsteritemmethod.local_name }}</td>
                    <td class="border-r border-black">{{item.local_name}}</td>
                    <td>{{ item.pivot.percentage }}%</td>
                </tr>
            </template>
        </table>

        <table class="table-fixed ml-52 mr-60">
            <thead>
                <tr>
                    <th class="text-left">High</th>
                </tr>
            </thead>
            <template v-for="item in items">
                <tr class="border border-black even:bg-white-200 odd:bg-slate-200" v-if="item.pivot.rank.id == 2">
                    <td class="pr-5 border-r border-black"> {{ item.pivot.monsteritemmethod.local_name }}</td>
                    <td class="border-r border-black">{{ item.local_name }}</td>
                    <td>{{ item.pivot.percentage }}% &#20;</td>
                </tr>
            </template>
        </table>

        <table class="ml-32">
            <thead>
                <tr>
                    <th class="text-left">G</th>
                </tr>
            </thead>
            <template v-for="item in items">
                <tr class="border border-black even:bg-white-200 odd:bg-slate-200" v-if="item.pivot.rank.id == 3">
                    <td class="pr-5 border-r border-black">{{ item.pivot.monsteritemmethod.local_name }}</td>
                    <td class="border-r border-black">{{item.local_name}}</td>
                    <td>{{ item.pivot.percentage }}%</td>
                </tr>
            </template>
        </table>
    </div>
</template>