<template>
    <div>
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>โรงเรียนสนมวิทยาคาร</v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app>
            <v-list-item
                style=" box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);">
                <v-list-item-content style="padding-bottom:9px">
                    <v-list-item-title class="text-h6">
                        Logo
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        โรงเรียนสนมวิทยาคาร
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>



            <v-list>
                <v-list-item to="/" active-class="menu-active me-1">
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>หน้าแรก</v-list-item-title>
                </v-list-item>

                <!-- <v-list-group :value="true"  prepend-icon="mdi-account-circle"> -->
                <v-list-group prepend-icon="mdi-account-circle">


                    <template v-slot:activator>
                        <v-list-item-title>
                            <router-link to="menu_2">ข้อมูลพื้นฐาน</router-link>
                        </v-list-item-title>
                    </template>


                    <v-list-item active-class="menu-active my-1 me-1" to="/menu_2_1">
                        <v-list-item-icon>
                            <v-icon>mdi-database</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            ข้อมูลผู้บริหาร
                        </v-list-item-content>
                    </v-list-item>


                    <v-list-group :value="true" no-action sub-group>
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>
                                    <router-link to="/menu_2_2">ข้อมูลครู</router-link>
                                </v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item link active-class="menu-active my-1 py-1 me-1  " to="/menu_2_2_1">

                            <v-list-item-content>กลุ่มสาระการเรียนรู้ภาษาไทย</v-list-item-content>
                        </v-list-item>


                        <v-list-item link active-class="menu-active my-1 py-1 me-1" to="/menu_2_2_2">

                            <v-list-item-content>กลุ่มสาระการเรียนรู้ภาษาต่างประเทศ</v-list-item-content>
                        </v-list-item>

                        <v-list-item link active-class="menu-active my-1 py-1 me-1" to="/menu_2_2_3">

                            <v-list-item-content>กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี</v-list-item-content>
                        </v-list-item>

                        <v-list-item link active-class="menu-active my-1 py-1 me-1" to="/menu_2_2_4">

                            <v-list-item-content>กลุ่มสาระการเรียนรู้คณิตศาสตร์</v-list-item-content>
                        </v-list-item>

                        <v-list-item link active-class="menu-active my-1 py-1 me-1" to="/menu_2_2_5">

                            <v-list-item-content>กลุ่มสาระการเรียนรู้การงานอาชีพ</v-list-item-content>
                        </v-list-item>

                        <v-list-item link active-class="menu-active my-1 py-1 me-1" to="/menu_2_2_6">

                            <v-list-item-content>กลุ่มสาระการเรียนรู้สังคมศึกษา ศาสนา และวัฒธรรม</v-list-item-content>
                        </v-list-item>

                        <v-list-item link active-class="menu-active my-1 py-1 me-1" to="/menu_2_2_7">

                            <v-list-item-content>กลุ่มสาระการเรียนรู้ศิลปะ</v-list-item-content>
                        </v-list-item>

                        <v-list-item link active-class="menu-active my-1 py-1 me-1" to="/menu_2_2_8">

                            <v-list-item-content>กลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา</v-list-item-content>
                        </v-list-item>

                        <v-list-item link active-class="menu-active my-1 py-1 me-1" to="/menu_2_2_9">

                            <v-list-item-content>หลักสูตร (ปวช.)</v-list-item-content>
                        </v-list-item>



                    </v-list-group>

                    <v-list-item to="/menu_2_3" active-class="menu-active my-1 me-1">
                        <v-list-item-icon>
                            <v-icon></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>โครงสร้างสถานศึกษา</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item to="/menu_2_4" active-class="menu-active my-1 me-1">
                        <v-list-item-icon>
                            <v-icon></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>อำนาจหน้าที่</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item to="/menu_2_5" active-class="menu-active my-1 me-1">
                        <v-list-item-icon>
                            <v-icon>mdi-database</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            แผนพัฒนาคุณภาพการศึกษา
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-group no-action sub-group>
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>กฏหมายที่เกี่ยวข้อง</v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item link to="/menu_2_6_1" active-class="menu-active my-1 me-1">
                            <v-list-item-title>พรบ.การศึกษา</v-list-item-title>
                        </v-list-item>

                        <v-list-item link to="/menu_2_6_2" active-class="menu-active my-1 me-1">
                            <v-list-item-title>พรบ.กระทรวงศึกษาธิการ</v-list-item-title>
                        </v-list-item>

                        <v-list-item link to="/menu_2_6_3" active-class="menu-active my-1 me-1">
                            <v-list-item-title>กฏหมายอื่น ๆ</v-list-item-title>
                        </v-list-item>

                    </v-list-group>

                    <v-list-item to="/menu_2_7" active-class="menu-active my-1 me-1">
                        <v-list-item-icon>
                            <v-icon>mdi-database</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            เจตจำนงสุจริตของผู้บริหาร
                        </v-list-item-content>
                    </v-list-item>

                </v-list-group>
            </v-list>



            <v-list>
                <v-list-group v-for="item in items" :key="item.title" v-model="item.active" :prepend-icon="item.action"
                    no-action>
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item v-for="child in item.items" :key="child.title" :to="child.to">
                        <v-list-item-content>
                            <v-list-item-title v-text="child.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list>

            <v-list>
                <v-list-group v-for="item in items_2" :key="item.title" v-model="item.active"
                    :prepend-icon="item.action" no-action>
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item v-for="child in item.items" :key="child.title" :to="child.to">
                        <v-list-item-content>
                            <v-list-item-title v-text="child.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list>

            <v-list>
                <v-list-group v-for="item in items_3" :key="item.title" v-model="item.active"
                    :prepend-icon="item.action" no-action>
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item v-for="child in item.items" :key="child.title" :to="child.to">
                        <v-list-item-content>
                            <v-list-item-title v-text="child.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list>

            <v-list>
                <v-list-group v-for="item in items_4" :key="item.title" v-model="item.active"
                    :prepend-icon="item.action" no-action>
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title  v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item v-for="child in item.items" :key="child.title" :to="child.to">
                        <v-list-item-content>
                            <v-list-item-title v-text="child.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list>

            <v-list>
                <v-list-item to="/PressRelease" active-class="menu-active me-1">
                    <v-list-item-icon>
                        <v-icon>mdi-application-edit</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>ข่าวประชาสัมพันธ์</v-list-item-title>
                </v-list-item>
            </v-list>

            <v-list>
                <v-list-item to="/ContactUs"  active-class="menu-active me-1">
                    <v-list-item-icon>
                        <v-icon>mdi-account-tie-hat</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>ติดต่อเรา</v-list-item-title>
                </v-list-item>
            </v-list>





        </v-navigation-drawer>
    </div>

</template>

<script>

export default {
    data() {
        return {
            drawer: null,

            items: [
                {
                    action: 'mdi-silverware-fork-knife',
                    active: false,
                    items: [
                        { title: 'ข้อมูลการบริหาร',to:'/menu_3_1' },
                        { title: 'แผนดำเนินงานประจำปี' ,to:'/menu_3_2'},
                        { title: 'รายงานผลกำกับติดตามการดำเนินงานประจำปี รอบ 6 เดือน',to:'/menu_3_3' },
                        { title: 'รายงานผลการดำเนินงานประจำปี',to:'/menu_3_4' },
                        { title: 'คู่มือหรือมาตรฐานการปฏิบัติงาน',to:'/menu_3_5' },
                        { title: 'คู่มือหรือมาตรฐานการให้บริการ' ,to:'/menu_3_6'},
                        { title: 'ข้อมูลเชิงสถิติการให้บริการ' ,to:'/menu_3_7'},
                        { title: 'รายงานผลการสำรวจความพึงพอใจการให้บริการ' ,to:'/menu_3_8'},
                    ],
                    title: 'ข้อมูลการบริหาร',
                },
            ],
            items_2: [
                {
                    action: 'mdi-clock',
                    active: false,
                    items: [
                    { title: 'ข้อมูลบริหารงบประมาณ',to:'/menu_4_1' },
                        { title: 'แผนการใช้จ่ายงบประมาณประจำปี' ,to:'/menu_4_2' },
                        { title: 'รายงานการกำกับติดตามการใช้จ่ายงบประมาณรอบ 6 เดือน' ,to:'/menu_4_3' },
                        { title: 'รายงานผลการใช้จ่ายงบประมาณประจำปี' ,to:'/menu_4_4' },
                        { title: 'แผนการจัดซื้อจัดจ้าง' ,to:'/menu_4_5' },
                        { title: 'ประกาศต่าง ๆ เกี่ยวกับการจัดซื้อจัดจ้าง' ,to:'/menu_4_6'},
                        { title: 'สรุปผลการจัดซื้อจัดจ้าง',to:'/menu_4_7' },
                        { title: 'รายงานผลการจัดซื้อจัดจ้าง' ,to:'/menu_4_8'},
                    ],
                    title: 'ข้อมูลบริหารงบประมาณ',
                },
            ],
            items_3: [
                {
                    action: 'mdi-group',
                    active: false,
                    items: [
                    { title: 'ข้อมูลทรัพยากรบุคคล', to:'/menu_5_1' },
                        { title: 'นโยบายการบริหารทรัพยากรบุคคล', to:'/menu_5_2' },
                        { title: 'การดำเนินการตามนโยบายการบริหารทรัพยากรบุคคล', to:'/menu_5_3' },
                        { title: 'หลักเกณฑ์การบริหารและพัฒนาทรัพยากรบุคคล', to:'/menu_5_4' },
                        { title: 'รายงานผลการบริหารและพัฒนาทรัพยากรบุคคลประจำปี', to:'/menu_5_5' },
                   
                    ],
                    title: 'ข้อมูลทรัพยากรบุคคล',
                },
            ],
            items_4: [
                {
                    action: 'mdi-car',
                    active: false,
                    items: [
                    { title: 'การส่งเสริมความโปร่งใส' ,to:'/menu_6_1' },
                        { title: 'แนวปฏิบัติการจัดการเรื่องร้องเรียนทุจริตและประพฤติมิชอบ',to:'/menu_6_2' },
                        { title: 'ช่องทางแจ้งเรื่องร้องเรียนการทุจริตและประพฤติมิชอบ',to:'/menu_6_3' },
                        { title: 'ข้อมูลเชิงสถิติเรื่องร้องเรียนการทุจริตและประพฤติมิชอบ',to:'/menu_6_4' },
                        { title: 'ช่องทางการรับฟังความคิดเห็น',to:'/menu_6_5' },
                        { title: 'การเปิดโอกาสให้เกิดการมีส่วนร่วม',to:'/menu_6_6' },
                        { title: 'การประเมินความเสี่ยงการทุจริตประจำปี',to:'/menu_6_7' },
                        { title: 'การดำเนินการเพื่อจัดการความเสี่ยงทุจริต',to:'/menu_6_8' },
                        { title: 'การเสริมสร้างวัฒนธรรมองค์กร',to:'/menu_6_9' },
                        { title: 'แผนปฏิบัติการป้องกันการทุจริตประจำปี' ,to:'/menu_6_10'},
                        { title: 'รายงานการกำกับติดตาม รอบ 6 เดือน',to:'/menu_6_11' },
                        { title: 'รายงานผลการดำเนินการป้องกันการทุจริตประจำปี',to:'/menu_6_12' },
                   
                    ],
                    title: 'การส่งเสริมความโปร่งใส',
                },
            ]
        }
    }
}
</script>

<style>
.menu-active {
    background-color: lightblue;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    padding-right: 10px;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);

}

.theme--light.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border {
    background-color: transparent;

}

.theme--light.v-list-item--active:hover::before,
.theme--light.v-list-item--active::before {
    opacity: 0;
}
</style>