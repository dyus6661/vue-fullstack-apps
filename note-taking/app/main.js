const EventBus = new Vue();

const state = {
    notes: [],
    timestamps: []
};

const mutations = {
    ADD_NOTE(state, payload) {
        let newNote = payload;
        state.notes.push(newNote)
    },
    ADD_TIMESTAMP(state, payload) {
        let newTimeStamp = payload;
        state.timestamps.push(newTimeStamp);
    }
};

const actions = {
    addNote(context, payload) {
        context.commit("ADD_NOTE", payload);
    },
    addTimestamp(context, payload) {
        context.commit("ADD_TIMESTAMP", payload);
    }
};

const getters = {
    getNotes: state => state.notes,
    getTimestamps: state => state.timestamps,
    getNoteCount: state => state.notes.length
};

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});

const inputComponent = {
    props: {
        placeholder: {
            type: String,
            required: true
        }
    },
    template: `<input 
    :placeholder="placeholder" 
    v-model="input"
    @keyup.enter="monitorEnterkey"
    class="input is-small" 
    type="text" />`,
    data() {
        return {
            input: ""
        };
    },
    methods: {
        monitorEnterkey() {
            this.$store.dispatch("addNote", this.input);
            this.$store.dispatch("addTimestamp", (new Date).toLocaleString());
            this.input = "";
        }
    }
};

const noteCountComponent = {
    template: `<div lass="note-count">Note ount: <strong>{{ noteCount }}</strong></div>`,
    computed: {
        noteCount() {
            return this.$store.getters.getNoteCount;
        }
    }
};

new Vue({
    el: '#app',
    store,
    components: {
        "input-component": inputComponent,
        "note-count-component": noteCountComponent
    },
    data: {
        placeholder: "Enter a note"
    },
    computed: {
        notes() {
            return this.$store.getters.getNotes
        },
        timestamps() {
            return this.$store.getters.getTimestamps;
        }
    }
});