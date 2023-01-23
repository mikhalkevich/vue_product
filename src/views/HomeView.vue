<template>
  <div class="home">
    <div v-for="c in catalogs" :key="c.id">
      <h2>{{ c.name }}</h2>
      <div>
        <CRow>
          <CCol sm="6" v-for="p in c.products" :key="p.id">
            <CCard>
              <CCardHeader>
                {{p.name}}
              </CCardHeader>
              <CCardBody>
               <img :src="`${p.pictures[0]}`" :width="200" />
              </CCardBody>
              <CCardFooter>
                {{p.small_description}}
                <p>Articule: {{p.id}}</p>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted} from "vue";
import { useStore } from "vuex";
const store = useStore();

const catalogs = computed(() => {
  return store.state.catalogs.data;
});

onMounted(() => {
  store.dispatch("fetchCatalogs");
});
</script>
