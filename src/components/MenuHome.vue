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

                <v-list-group :value="true" prepend-icon="mdi-account-circle" >

                        <template v-slot:activator >
                            <v-list-item-title><router-link  to="menu_2">ข้อมูลพื้นฐาน</router-link></v-list-item-title>
                        </template>


                    <v-list-item active-class="menu-active my-1 me-1" to="/menu_2_1">
                        <v-list-item-icon>
                            <v-icon></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>ข้อมูลผู้บริหาร</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>


                    <v-list-group :value="true" no-action sub-group>
                        <template v-slot:activator>
                            <v-list-item-content >
                                <v-list-item-title><router-link to="/menu_2_2">ข้อมูลครู</router-link></v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item link active-class="menu-active my-1 py-1 me-1  " to="/menu_2_2_1">
                            <v-list-item-icon>
                                <v-icon>mdi-clock</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title class="">กลุ่มสาระการเรียนรู้ภาษาไทย</v-list-item-title>
                        </v-list-item>


                        <v-list-item link active-class="menu-active my-1 py-1 me-1" to="/menu_2_2_2">
                            <v-list-item-icon>
                                <v-icon>mdi-clock</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>กลุ่มสาระการเรียนรู้ภาษาต่างประเทศ</v-list-item-title>
                        </v-list-item>

                        <v-list-item link active-class="menu-active my-1 py-1 me-1" to="/menu_2_2_3">
                            <v-list-item-icon>
                                <v-icon>mdi-clock</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี</v-list-item-title>
                        </v-list-item>

                        <v-list-item link active-class="menu-active my-1 py-1 me-1" to="/menu_2_2_4">
                            <v-list-item-icon>
                                <v-icon>mdi-clock</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>กลุ่มสาระการเรียนรู้คณิตศาสตร์</v-list-item-title>
                        </v-list-item>

                        <v-list-item link active-class="menu-active my-1 py-1 me-1" to="/menu_2_2_5">
                            <v-list-item-icon>
                                <v-icon>mdi-clock</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>กลุ่มสาระการเรียนรู้การงานอาชีพ</v-list-item-title>
                        </v-list-item>

                        <v-list-item link active-class="menu-active my-1 py-1 me-1" to="/menu_2_2_6">
                            <v-list-item-icon>
                                <v-icon>mdi-clock</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>กลุ่มสาระการเรียนรู้สังคมศึกษา ศาสนา และวัฒธรรม</v-list-item-title>
                        </v-list-item>

                        <v-list-item link active-class="menu-active my-1 py-1 me-1" to="/menu_2_2_7">
                            <v-list-item-icon>
                                <v-icon>mdi-clock</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>กลุ่มสาระการเรียนรู้ศิลปะ</v-list-item-title>
                        </v-list-item>

                        <v-list-item link active-class="menu-active my-1 py-1 me-1" to="/menu_2_2_8">
                            <v-list-item-icon>
                                <v-icon>mdi-clock</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>กลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา</v-list-item-title>
                        </v-list-item>

                        <v-list-item link active-class="menu-active my-1 py-1 me-1" to="/menu_2_2_9">
                            <v-list-item-icon>
                                <v-icon>mdi-clock</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>หลักสูตร (ปวช.)</v-list-item-title>
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
                            <v-icon></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>แผนพัฒนาคุณภาพการศึกษา</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-group no-action sub-group>
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>กฏหมายที่เกี่ยวข้อง</v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item link to="/dataexecutive" active-class="menu-active my-1 me-1">
                            <v-list-item-title>xxxx</v-list-item-title>

                            <v-list-item-icon>
                                <v-icon v-text="'mdi-delete'"></v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list-group>
                </v-list-group>
            </v-list>





        </v-navigation-drawer>
    </div>

</template>

<script>

export default {
    data() {
        return {
            drawer: null
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