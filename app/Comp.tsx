"use client"

import React from 'react'

const Comp = ({data}:any) => {
  console.log(data);
  return (
    <div>
      {data.map((item:any) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <ul>
              {item.CategoriesOnExpenses.map((item:any) => {
                return (
                  <li key={item.id}>
                    <p>{item.Expense.amount}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })
      }
    </div>
  )
}

export default Comp