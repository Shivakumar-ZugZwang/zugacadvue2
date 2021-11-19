import Vue from 'vue'
import VueRouter from 'vue-router'
import StudentList from '@/components/StudentComponents/StudentList'
import AdminList from '@/components/AdminsComponents/AdminList'
import CoachList from '@/components/AdminsComponents/CoachList'
import QuizList from '@/components/QuizComponents/QuizList'
import BatchList from '@/components/BatchComponents/BatchList'
import ChallengeList from '@/components/ChallengeComponents/ChallengeList'
import CourseList from '@/components/CourseComponents/CourseList'
import LessonsList from '@/components/LessonComponents/LessonsList'
import SuperUserList from '@/components/AdminsComponents/SuperUserList'
import AddBatch from '@/components/BatchComponents/AddBatch'
import ArchivedBatch from '@/components/BatchComponents/ArchivedBatch'
import AddStudentDetails from '@/components/StudentComponents/AddStudentDetails'
import AddStudent from '@/components/StudentComponents/AddStudent'
import StudentDetails from '@/components/StudentComponents/StudentDetails'
import UpdateStudent from '@/components/StudentComponents/UpdateStudent'
import Dashboard from '@/components/HomeComponents/Dashboard'
import BatchDetails from '@/components/BatchComponents/BatchDetails'
import UpdateBatch from '@/components/BatchComponents/UpdateBatch'
import Status from '@/components/BatchComponents/Status'
import BatchStatus from '@/components/BatchComponents/BatchStatus'
import UpdateSuperuser from '@/components/AdminsComponents/UpdateSuperuser'
import AddUser from '@/components/AdminsComponents/AddUser'
import AdminsDashboard from '@/components/HomeComponents/AdminsDashboard'
import Quizlist from '@/components/QuizComponents/QuizList'
import StudentDash from '@/components/StudentComponents/StudentDash'
import BatchAtt from '@/components/BatchComponents/BatchAtt'
import Addquiz from '@/components/QuizComponents/Addquiz'
import Quizdash from '@/components/QuizComponents/Quizdash'
import Updatequiz from '@/components/QuizComponents/Updatequiz'

import LeadsList from '@/components/LeadsComponents/LeadsList'
import segmentlist from '@/components/LeadsComponents/segmentlist'
import taglist from '@/components/LeadsComponents/taglist'
import leadnavbar from '@/components/LeadsComponents/leadnavbar'
import reportnavbar from '@/components/ReportsComponents/reportnavbar'
import Addsegments from '@/components/LeadsComponents/Addsegments'
import Sendmail from '@/components/LeadsComponents/Sendmail'
// import Tag from '@/components/Tag'
// import Leads from '@/components/Leads'
import Updatelead from '@/components/LeadsComponents/Updatelead'
import Leaddashboard from '@/components/LeadsComponents/Leaddashboard'
import Studentdormantform from '@/components/ReportsComponents/Studentdormantform'
import Studentrenewalform from '@/components/ReportsComponents/Studentrenewalform'
import Weeklybatch from '@/components/ReportsComponents/Weeklybatch'
import Statustimeline from '@/components/ReportsComponents/Statustimeline'
import Batchtimeline from '@/components/ReportsComponents/Batchtimeline'
import Leadsdetails from '@/components/LeadsComponents/Leadsdetails'
import Addleads from '@/components/LeadsComponents/Addleads'
import Addtag from '@/components/LeadsComponents/Addtag'
import Studentdormantreports from '@/components/ReportsComponents/Studentdormantreports'
import Studentrenewalreport from '@/components/ReportsComponents/Studentrenewalreport'

Vue.use(VueRouter)

const routes = [{
    path: '/vue/studentlist',
    name: 'StudentList',
    component: StudentList
  },
  {
    path: '/vue/admin',
    component: AdminList
  },
  {
    path: '/vue/coach',
    component: CoachList
  },
  {
    path: '/vue/quiz',
    component: QuizList
  },
  {
    path: '/vue/superuser',
    component: SuperUserList
  },
  {
    path: '/vue/dashboard',
    component: Leaddashboard
  },
  {
    path: '/vue/batch',
    component: BatchList
  },
  {
    path: '/vue/challenges',
    component: ChallengeList
  },
  {
    path: '/vue/courses',
    component: CourseList
  },
  {
    path: '/vue/lessons',
    component: LessonsList
  },
  {
    path: '/vue/addlead',
    component: Addleads
  },
  {
    path: '/vue/addsegments',
    component: Addsegments
  },
  {
    path: '/vue/sendmail',
    component: Sendmail
  },
  {
    path: '/vue/tags',
    component: Addtag
  },
  {
    path: '/vue/AddBatch',
    component: AddBatch
  },
  {
    path: '/vue/Archived',
    component: ArchivedBatch
  },
  {
    path: '/vue/AddStudent',
    component: AddStudent
  },
  {
    path: '/vue/AddStudentDetails',
    component: AddStudentDetails
  },
  {
    path: '/vue/UpdateStudent/:username',
    component: UpdateStudent
  },
  {
    path: '/vue/StudentDetails/:username',
    component: StudentDetails
  },
  {
    path: '/vue/updatelead/:email/:first_name',
    component: Updatelead
  },
  {
    path: '/vue/updatesegments',
    component: segmentlist
  },
  {
    path: '/vue/updatetag',
    component: taglist
  },
  {
    path: '/vue/dash',
    component: Dashboard
  },
  {
    path: '/vue/BatchDetails/:batch_id',
    component: BatchDetails
  },
  {
    path: '/vue/UpdateBatch/:batch_id',
    component: UpdateBatch
  },
  {
    path: '/vue/status/:batch_id',
    component: Status
  },
  {
    path: '/vue/batchstatus',
    component: BatchStatus
  },
  {
    path: '/vue/update/:username',
    component: UpdateSuperuser
  },
  {
    path: '/vue/adduser',
    component: AddUser
  },
  {
    path: '/vue/adminsdash',
    component: AdminsDashboard
  },
  {
    path: '/vue/quizlist',
    component: Quizlist
  },
  {
    path: '/vue/studentdashboard',
    component: StudentDash
  },
  {
    path: '/vue/batchatt/:batch_id',
    component: BatchAtt
  },
  {
    path: '/vue/addquiz',
    component: Addquiz
  },
  {
    path: '/vue/quizdash',
    component: Quizdash
  },
  {
    path: '/vue/updatequiz',
    component: Updatequiz
  },
  {
    path: '/vue/leads',
    component: leadnavbar
  },
  {
    path: '/vue/reports',
    component: reportnavbar
  },
  {
    path: '/vue/viewlead',
    component: LeadsList
  },
  {
    path: '/vue/viewsegment',
    component: segmentlist
  },
  {
    path: '/vue/viewtag',
    component: taglist
  },
  {
    path: '/vue/viewstudentdormant',
    component: Studentdormantreports
  },
  {
    path: '/vue/studentdormant',
    component: Studentdormantform
  },
  {
    path: '/vue/studentsrenewal',
    component: Studentrenewalform
  },
  {
    path: '/vue/weeklybatch',
    component: Weeklybatch
  },
  {
    path: '/vue/statustimeline',
    component: Statustimeline
  },
  {
    path: '/vue/batchtimeline',
    component: Batchtimeline
  },
  {
    path: '/vue/leadsdetails/:email/:first_name',
    component: Leadsdetails
  },
  {
    path: '/vue/studentrenewalreport/:batch',
    component: Studentrenewalreport
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router