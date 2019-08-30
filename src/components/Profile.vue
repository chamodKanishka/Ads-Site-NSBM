<template>
    <div>
    <h1>hello</h1>
        <!-- form wrapper -->
        <fvl-form method="post" :data="form" url="/create">

            <!-- Text input component -->
            <fvl-input
                    :value.sync="form.fullname"
                    label="Full Name"
                    name="fullname"
            />

            <!-- Textarea component -->
            <fvl-textarea
                    :value.sync="form.bio"
                    label="Bio"
                    name="bio"
            />

            <!-- Radio component with options -->
            <fvl-radio
                    :checked.sync="form.pet"
                    :options="{'cat': 'Cat', 'dog': 'Dog'}"
                    label="Favorite pet"
                    name="pet"
            />

            <!-- Submit button -->
            <fvl-submit>Validate</fvl-submit>

        </fvl-form>
    </div>
</template>

<script>
    import { FvlForm, FvlInput, FvlTextarea, FvlRadio, FvlSubmit } from 'formvuelar'

    export default {
        name: "Profile",
        components: {
            FvlForm,
            FvlInput,
            FvlTextarea,
            FvlRadio,
            FvlSubmit,
        },
        data() {
            return {
                form: {
                    fullname: '',
                    bio: '',
                    pet: ''
                },
            }
        }
    }
</script>

<style scoped>

</style>