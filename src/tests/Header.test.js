import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

// locals
import {Header} from '~/components/shared'
import {theme} from '~/config'

test('should have default color Header', () => {
  const tree = renderer.create(<Header theme={theme} />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('color', '#333')
})

test('should have default color size', () => {
  const tree = renderer.create(<Header theme={theme} />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('font-size', '15px')
})

test('should have default weight', () => {
  const tree = renderer.create(<Header theme={theme} />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('font-weight', 'normal')
})

test('should have default Header align', () => {
  const tree = renderer.create(<Header theme={theme} />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('text-align', 'center')
})

test('should replace Header color', () => {
  const tree = renderer.create(<Header theme={theme} color="#555"/>).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('color', '#555')
})

test('should replace Header size', () => {
  const tree = renderer.create(<Header theme={theme} size="50px"/>).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('font-size', '50px')
})

test('should replace Header weight', () => {
  const tree = renderer.create(<Header theme={theme} weight="bold"/>).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('font-weight', 'bold')
})

test('should replace Header color', () => {
  const tree = renderer.create(<Header theme={theme} align="left"/>).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('text-align', 'left')
})
