import { Post } from '../../lib/api';
import markdownStyles from './index.module.css';

export default function PostBody({ content }: Post) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
