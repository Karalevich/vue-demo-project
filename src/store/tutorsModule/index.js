import getters from "@/store/tutorsModule/getters";
import mutations from "@/store/tutorsModule/mutations";
import actions from "@/store/tutorsModule/actions";

export default {
    namespaced: true,
    state() {
        return{
            tutors: [
                {
                    id: 'c1',
                    firstName: 'Andrei',
                    lastName: 'Karalevich',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                        "I'm Andrei and I've worked as a web developer for 3 years. Let me help you become a developer as well!",
                    hourlyRate: 30
                },
                {
                    id: 'c2',
                    firstName: 'Andrew',
                    lastName: 'Korolevich',
                    areas: ['frontend', 'career'],
                    description:
                        'I am Andrew and as a  developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30
                }
            ]
        }
    },
    getters,
    mutations,
    actions
}