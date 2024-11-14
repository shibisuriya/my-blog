import { Resume, allResumes } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import ResumeLayout from '@/layouts/ResumeLayout'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const [resume]: Resume[] = allResumes
  const mainContent = coreContent(resume)

  return (
    <>
      <ResumeLayout content={mainContent}>
        <MDXLayoutRenderer code={resume.body.code} />
      </ResumeLayout>
    </>
  )
}
