import React, {useEffect, useState} from 'react'
import { Card } from 'antd';
import CardItem from './components/CardItem/index.js'
import EchartsLine from '../../../components/EchartsLine'
import './dashboard.scss'
import API from '../../../api'
export default function dashboard () {
  const [list, setList] = useState({
    seas: {
      text: '公海管理',
      data: {
        headcount: {
          title: '公海总人数',
          val: 7
        },
        twice: {
          title: '二询人数',
          val: 0
        }
      }
    },
    revenue: {
      text: '营收概况',
      data: {
        YOrder: {title: '昨日订单收入', val: 7},
        YTotal: {title: '昨日订单总量', val: 0},
        s: {title: '昨日总耗课数', val: 7},
        x: {title: '昨日消耗课时金额', val: 0},
        headcount: {title: '今日已排课时数', val: 7},
        twice: {title: '未履约课时总数', val: 0}
      }
    },
    classTeacher: {
      text: '班主任监管',
      data: {
        YOrder: {title: '新分配待跟进人数', val: 7},
        YTotal: {title: '昨日续课订单', val: 0},
        s: {title: '排课余量不足', val: 7},
        x: {title: '课时余量不足', val: 0}
      }
    },
    market: {
      text: '销售监管',
      data: {
        YOrder: {title: '待交接人数', val: 7},
        YTotal: {title: '待处理资源', val: 0},
        s: {title: '试听中学员', val: 7},
        x: {title: '转化中学员', val: 0},
        x1: {title: '学员订单', val: 0}
      }
    },
  })
  useEffect(() => {
    // API.WorkbenchRevenueOverviewStatistics
  }, [])
  return (
    <div className="dashboard">
      {
        Object.keys(list).map((key) => (
          <CardItem title={list[key].text} className="mb-20" key={key} list={list[key].data}>
            <div className="itemData">
              <p className="title">公海总人数</p>
              <p className="value">7</p>
            </div>
          </CardItem>
        ))
      }
      <EchartsLine className="mb-20"></EchartsLine>
      <EchartsLine></EchartsLine>
    </div>
  )
}
