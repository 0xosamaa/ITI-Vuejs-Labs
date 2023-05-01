<template>
    <div>
        <div>
            <div
                class="card-header d-flex justify-content-between align-items-center"
            >
                <h1 class="card-title">Student Data</h1>
                <button
                    class="btn btn-primary"
                    data-target="#addstudentmodal"
                    data-toggle="modal"
                >
                    Add Student
                </button>
            </div>
            <table
                class="table table-dark table-striped table-bordered table-hover table-condensed"
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(std, i) in students" :key="i + 1">
                        <td>{{ i + 1 }}</td>
                        <td>{{ std.name }}</td>
                        <td>{{ std.age }}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2">Total Students</td>
                        <td>{{ students.length }}</td>
                    </tr>
                </tfoot>
            </table>
        </div>

        <!-- Modal -->
        <div
            id="addstudentmodal"
            aria-hidden="true"
            aria-labelledby="addstudentmodalLabel"
            class="modal fade"
            role="dialog"
            tabindex="-1"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 id="addstudentmodalLabel" class="modal-title">
                            Add Student
                        </h5>
                        <button
                            aria-label="Close"
                            class="close"
                            data-dismiss="modal"
                            type="button"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="" class="form-group">
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input
                                    v-model="addName"
                                    class="form-control"
                                    type="text"
                                    required
                                    minlength="2"
                                    maxlength="50"
                                    pattern="^[a-zA-Z\s]+$"
                                />
                            </div>
                            <div class="form-group">
                                <label for="age">Age:</label>
                                <input
                                    v-model="addAge"
                                    class="form-control"
                                    type="text"
                                    datatype="numeric"
                                    required
                                />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button
                            class="btn btn-secondary"
                            data-dismiss="modal"
                            type="button"
                        >
                            Close
                        </button>
                        <button
                            class="btn btn-primary"
                            type="button"
                            @click="addStudent"
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BodyComponent',
    data: () => ({
        students: [
            { id: 1, name: 'Osama', age: 27 },
            { id: 2, name: 'Sasa', age: 27 },
            { id: 3, name: 'Joe', age: 26 },
            { id: 4, name: 'Saber', age: 24 },
        ],
        addName: '',
        addAge: '',
    }),
    methods: {
        getLastId() {
            return this.students[this.students.length - 1].id + 1;
        },
        addStudent() {
            this.students.push({
                id: this.getLastId(),
                name: this.addName,
                age: this.addAge,
            });
            this.addName = '';
            this.addAge = '';
            $('#addstudentmodal').modal('hide');
        },
    },
};
</script>
