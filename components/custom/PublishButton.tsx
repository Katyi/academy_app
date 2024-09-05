'use client';

import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface PublishButtonProps {
  disabled: boolean;
  courseId: string;
  sectionId?: string;
  isPublished: boolean;
  page: string;
}

const PublishButton = ({
  disabled,
  courseId,
  sectionId,
  isPublished,
  page,
}: PublishButtonProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    let url = `/api/courses/${courseId}`;
    if (page === 'Section') {
      url += `/sections/${sectionId}`;
    }

    let item = page === 'Section' ? 'Раздел' : 'Курс';

    try {
      setIsLoading(true);
      isPublished
        ? await axios.post(`${url}/unpublish`)
        : await axios.post(`${url}/publish`);

      toast.success(`${item} ${isPublished ? 'неопубликован' : 'опубликован'}`);
      router.refresh();
    } catch (err) {
      toast.error('Что-то пошло не так!');
      console.log(
        `Failed to ${isPublished ? 'unpublish' : 'publish'} ${page}`,
        err
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="outline"
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : isPublished ? (
        'Отменить публикацию'
      ) : (
        'Публиковать'
      )}
    </Button>
  );
};

export default PublishButton;
