// banner相关
import {post} from '../../utils/request'

/**
* @description 营收概况统计
*/
export function WorkbenchRevenueOverviewStatistics (data) {
  return post('/Workbench/revenueOverviewStatistics', data)
}

// /**
// * @description 班主任未跟进列表接口
// * @param {Integer} page 当前页
// * @param {Integer} pageSize 页大小
// * @param {String} student 学生名称或手机
// * @param {String} channel 渠道名称
// * @param {String} buildWechatGroup 	是否建群 0=未建群, 1=已建群
// * @param {String} teacherFollower 是否跟进 0 未跟进 1 已跟进
// */
// export function headTeacherSelectStudentForTeacher (data) {
//   return request({
//     url: '/headTeacher/selectStudentForTeacher',
//     method: 'post',
//     data
//   })
// }

// /**
// * @description 营收概况-成交订单
// * @param {Integer} pageIndex 当前页
// * @param {Integer} pageSize 页大小
// * @param {String} studentName 学员姓名
// * @param {String} orderCreateTimeStart 订单创建时间（开始）
// * @param {String} orderCreateTimeEnd 订单创建时间（结束）
// * @param {String} orderNo 订单编号
// * @param {String} channelUuid 渠道来源uuid
// */
// export function WorkbenchTransactionOrderList (data) {
//   return request({
//     url: '/Workbench/transactionOrderList',
//     method: 'post',
//     data
//   })
// }

// /**
// * @description 班主任转化订单
// * @param {Integer} pageIndex 当前页
// * @param {Integer} pageSize 页大小
// * @param {String} studentName 学员姓名
// * @param {String} orderCreateTimeStart 订单创建时间（开始）
// * @param {String} orderCreateTimeEnd 订单创建时间（结束）
// * @param {String} orderNo 订单编号
// * @param {String} orderType 订单类型
// * @param {String} status 订单状态
// */
// export function headTeacherOrderList (data) {
//   return request({
//     url: '/headTeacher/orderList',
//     method: 'post',
//     data
//   })
// }

// /**
// * @description 消耗课时列表
// * @param {Integer} pageIndex 当前页
// * @param {Integer} pageSize 页大小
// * @param {String} coursePlanName 课节名称
// * @param {String} studentName 学生的名字
// * @param {String} teacherName 老师的名字
// * @param {String} headTeacher 班主任的名字
// * @param {String} startTime 上课时间（开始）
// * @param {String} endTime 上课时间（结束）
// */
// export function WorkbenchConsumeClassHoursList (data) {
//   return request({
//     url: '/Workbench/consumeClassHoursList',
//     method: 'post',
//     data
//   })
// }

// /**
// * @description 业绩统计 金额/时间 折线图
// * @param {Numver} status （1获取本周数据，2获取本月数据）
// */
// export function WorkbenchPerformanceStatisticsAmountTime (data) {
//   return request({
//     url: '/Workbench/performanceStatisticsAmountTime',
//     method: 'post',
//     data
//   })
// }

// /**
// * @description 业绩统计 订单量/时间 折线图
// * @param {Numver} status （1获取本周数据，2获取本月数据）
// */
// export function WorkbenchPerformanceStatisticsOrderVolumeTime (data) {
//   return request({
//     url: '/Workbench/performanceStatisticsOrderVolumeTime',
//     method: 'post',
//     data
//   })
// }

// /**
// * @description 公海管理统计
// */
// export function UserReportFreeUserCount (data) {
//   return request({
//     url: '/user/reportFreeUserCount',
//     method: 'post',
//     data
//   })
// }

// /**
// * @description 班主任一键领取 随机领取5个未分配的学员
// */
// export function UserRandAsign () {
//   return request({
//     url: '/user/randAsign',
//     method: 'post'
//   })
// }

// /**
// * @description 学员课时余量列表
// * @param {Number} page 页码
// * @param {Number} rows 单页内容个数
// */
// export function teacherSearchTimesLimit (data) {
//   return request({
//     url: '/teacher/searchTimesLimit',
//     method: 'post',
//     data
//   })
// }

// /**
// * @description 学员排课余量列表
// * @param {Number} page 页码
// * @param {Number} rows 单页内容个数
// */
// export function teacherSearchPlanNumLimit (data) {
//   return request({
//     url: '/teacher/searchPlanNumLimit',
//     method: 'post',
//     data
//   })
// }

// /**
// * @description 获取销售人员业绩总览
// * @param {string}} salesUuid 销售uuid
// */
// export function SalesPersonGetSalesPersonPerformanceOverview (data) {
//   return request({
//     url: '/SalesPerson/getSalesPersonPerformanceOverview',
//     method: 'post',
//     data
//   })
// }

// /**
// * @description 获取班主任业绩总览
// * @param {string}} salesUuid 销售uuid
// */
// export function headTeacherTotalPerformance () {
//   return request({
//     url: '/headTeacher/totalPerformance',
//     method: 'get'
//   })
// }

// /**
// * @description 获取销售人员近三个月的销售业绩
// * @param {string}} salesUuid 销售uuid
// */
// export function SalesPersonGetSalesPerformancePastThreeMonths (data) {
//   return request({
//     url: '/SalesPerson/getSalesPerformancePastThreeMonths',
//     method: 'post',
//     data
//   })
// }

// /**
// * @description 获取本月销售业绩排名 —- 销售管理
// */
// export function salesPersonGetSalesPerformanceRankMonth () {
//   return request({
//     url: '/SalesPerson/getSalesPerformanceRankMonth',
//     method: 'POST'
//   })
// }

// /**
// * @description 获取班主任人员近三个月的销售业绩
// * @param {string}} salesUuid 销售uuid
// */
// export function headTeacherRecentPerformance () {
//   return request({
//     url: '/headTeacher/recentPerformance',
//     method: 'get'
//   })
// }

// /**
// * @description 班主任业绩排名接口
// */
// export function headTeacherPerformanceRank () {
//   return request({
//     url: '/headTeacher/performanceRank',
//     method: 'get'
//   })
// }

// /**
// * @description 获取销售管理工作提醒
// */
// export function salesPersonGetSalesManagementJobReminder (data) {
//   return request({
//     url: '/SalesPerson/getSalesManagementJobReminder',
//     method: 'post',
//     data: data
//   })
// }

// /**
// * @description 获取销售成员工作提醒
// */
// export function salesPersonGetSalesJobReminder (data) {
//   return request({
//     url: '/SalesPerson/getSalesJobReminder',
//     method: 'post',
//     data: data
//   })
// }

// /**
// * @description 获取班主任管理工作提醒
// */
// export function headTeacherReminder () {
//   return request({
//     url: '/headTeacher/reminder',
//     method: 'get'
//   })
// }

// /**
// * @description 设置班主任已经建群
// * @param {string}} salesUuid 销售uuid
// */
// export function headTeacherBuildGroup (params) {
//   return request({
//     url: '/headTeacher/buildGroup',
//     method: 'get',
//     params
//   })
// }

// /**
// * @description 设置班主任已经跟进
// * @param {string}} userUuid 学生uuid
// */
// export function headTeacherFollow (params) {
//   return request({
//     url: '/headTeacher/follow',
//     method: 'get',
//     params
//   })
// }
