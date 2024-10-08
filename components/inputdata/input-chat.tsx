import React from 'react'
import { getInput } from '@/app/actions'
import { SnopForm } from '@/components/inputdata/SnopForm-chat'

export function SnopInput() {

  return <SnopForm getInput={getInput} />
}