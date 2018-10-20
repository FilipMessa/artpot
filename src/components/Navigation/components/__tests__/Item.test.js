// @flow
import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Item from '../Item'

const data = [{ url: 'info', label: 'Info' }, { url: 'works', label: 'Home' }]

test('<ListItem> render as link.', () => {
  const { getByTestId, getByText } = render(
    <Item url={data[0].url} label={data[0].label} />
  )

  expect(getByTestId('navigation-link').getAttribute('href')).toBe(
    `/${data[0].url}`
  )
  expect(getByTestId('navigation-link').getAttribute('alt')).toBe(data[0].label)
  expect(getByText(data[0].label)).toBeDefined()
})

test('<ListItem> render as the list.', () => {
  const { getByTestId, getByText, debug } = render(
    <Item label="Works" list={data} />
  )
  expect(getByText('Works')).toBeDefined()

  fireEvent.click(getByTestId('navigation-list-label'))

  const firstItem = getByText(data[0].label)
  const secondItem = getByText(data[1].label)
  expect(firstItem.getAttribute('href')).toBe(`/${data[0].url}`)
  expect(secondItem.getAttribute('href')).toBe(`/${data[1].url}`)

  expect(firstItem).toBeDefined()
  expect(secondItem).toBeDefined()
})
