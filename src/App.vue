<template>
    <div>
        <HeaderComponent />
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <SidebarComponent />
                </div>
                <div class="col-md-9">
                    <BodyComponent />
                </div>
            </div>
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import SidebarComponent from '@/components/SidebarComponent.vue';
import BodyComponent from '@/components/BodyComponent.vue';

export default {
    name: 'App',
    components: {
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        BodyComponent,
    },
};
</script>
