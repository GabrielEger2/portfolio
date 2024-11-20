'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

interface FilteredListProps<T> {
  items: T[]
  filterFunction: (item: T, searchTerm: string, searchTag: string) => boolean
  renderItem: (item: T) => React.ReactNode
  filterTags: string[]
  labelText: string
  placeholderText: string
  getKey: (item: T) => React.Key
}

function FilteredList<T>({
  items,
  filterFunction,
  renderItem,
  filterTags,
  labelText,
  placeholderText,
  getKey,
}: FilteredListProps<T>) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchTag, setSearchTag] = useState('')

  const filteredItems = items.filter((item) =>
    filterFunction(item, searchTerm, searchTag),
  )

  return (
    <div className="max-w-7xl w-full min-h-screen mx-auto justify-center px-2 mb-10 md:mb-0">
      <div className="mb-10">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">{labelText}</span>
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder={placeholderText}
              className="input input-bordered w-full rounded-r-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              onChange={(event) => setSearchTag(event.target.value)}
              className="select select-accent md:w-full md:max-w-xs rounded-l-none"
              defaultValue={''}
            >
              <option value={''}>All Options</option>
              {filterTags?.map((tag: string, index: number) => (
                <option key={index} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </label>
      </div>
      <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={getKey(item)}
              layout
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex justify-center">{renderItem(item)}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default FilteredList
