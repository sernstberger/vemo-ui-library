import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import MaterialTable from 'material-table'
import {
  MTableToolbar,
  MTableBody,
  MTableBodyRow
} from 'material-table/dist/components'

import { Typography, withStyles } from '@material-ui/core'
// import { ArrowDownward } from '@material-ui/icons'

import { Icon, ZeroState } from '../'

import styles from './styles'
import clsx from 'clsx'

const MaterialTbl = ({
  columns,
  data,
  icon,
  onRowClick,
  options,
  title: _title,
  localization = {}
}) => {
  const classes = styles()

  const title =
    typeof _title === 'string' ? (
      <Typography
        variant="h5"
        color="textSecondary"
        className={icon ? classes.TitleWithIcon : classes.Title}
      >
        {icon}
        {_title}
      </Typography>
    ) : (
      _title
    )

  return (
    <MaterialTable
      localization={{
        ...localization,
        body: {
          emptyDataSourceMessage: 'No Results',
          ...localization.body
        }
      }}
      components={{
        Container: ({ children }) => <div>{children}</div>,
        Toolbar: props => <StyledMTableToolbar {...props} />,
        Row: props => (
          <MTableBodyRow
            {...props}
            className={clsx({
              clickable: onRowClick !== null
            })}
          />
        ),
        Body: props => {
          const {
            renderData = [],
            localization: { emptyDataSourceMessage }
          } = props
          if (renderData.length > 0) {
            return <MTableBody {...props} />
          }
          return (
            <tbody>
              <tr>
                <td colSpan={100}>
                  <Typography
                    variant="h4"
                    component="div"
                    color="textSecondary"
                    className={classes.EmptyState}
                  >
                    <div className={classes.EmptyStateContainer}>
                      {/* <Icon name="Cancel" size="small" color="error" /> */}
                      <span>{emptyDataSourceMessage}</span>
                    </div>
                  </Typography>
                </td>
              </tr>
            </tbody>
          )
        }
      }}
      {...{ columns, data, onRowClick, title }}
      options={{
        ...defaultOptions,
        ...options
      }}
      icons={{
        SortArrow: forwardRef((props, ref) => (
          // <ArrowDownward {...props} ref={ref} />
          <div>ArrowDownward</div>
        ))
      }}
    />
  )
}

MaterialTbl.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({})),
  data: PropTypes.arrayOf(PropTypes.shape({})),
  icon: PropTypes.node,
  onRowClick: PropTypes.func,
  options: PropTypes.shape({}),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  localization: PropTypes.shape({})
}

export default MaterialTbl

// Supporting Configuration

const defaultOptions = {
  draggable: false,
  emptyRowsWhenPaging: false,
  exportButton: false,
  paginationType: 'stepped',
  paging: false,
  search: false,
  showFirstLastPageButtons: false,
  headerStyle: {
    whiteSpace: 'nowrap'
  },
  cellStyle: {
    width: 'auto'
  },
  localization: {
    body: {
      emptyDataSourceMessage: 'Test'
    }
  }
}

const StyledMTableToolbar = withStyles({
  root: {
    paddingLeft: '.5em',
    paddingRight: '.5em'
  }
})(MTableToolbar)
