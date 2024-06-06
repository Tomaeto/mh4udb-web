<script setup>
const props = defineProps(['weapons']);
</script>

<template>
    <h1 class="text-left ml-60 font-semibold text-lg mb-5 mt-10">Equipment</h1>
    <div class="flex justify-left items-start">
        <table class="ml-60 ">
            <thead>
                <tr>
                    <th class="text-left">Weapons</th>
                    <th></th>
                </tr>
            </thead>
            <tr class=" border border-black even:bg-white-200 odd:bg-slate-200" v-for="weapon in weapons">
                <td class="pr-5 border-r border-black">{{ weapon.weapontype.local_name }}</td>
                <td class="pr-5">{{ weapon.local_name }}</td>
            </tr>
        </table>
    </div>
</template>