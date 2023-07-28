import React from 'react';
import {
  StDetailContainer,
  StDetailForm,
  StDetailFormBox,
  StDetailFormButton,
  StDetailHeader,
  StInfo
} from '../../styles/DetailContent.styles';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Info from '../Info/Info';
import DatePicker from '../DatePicker/DatePicker';
import { useQuery } from '@tanstack/react-query';
import { getTest } from '../../api/api';

function DetailContent() {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['infos'],
    queryFn: getTest
  });

  console.log('data ', data);
  console.log('isLoading ', isLoading);
  console.log('isSuccess ', isSuccess);
  console.log('error ', isError);

  if (isLoading) return <p>로딩중입니다...</p>;
  if (isError) return <p>오류가 발생하였습니다...</p>;

  return (
    <StDetailContainer>
      <StDetailHeader>
        <h3>타이틀</h3>
      </StDetailHeader>
      <StDetailForm>
        <StDetailFormBox>
          {/* 정보 1 */}
          <StInfo>
            <Info title='정보 1' description='정보 내용 1' />
          </StInfo>

          {/* 정보 2 */}
          <StInfo>
            <Input label='정보 2' />
          </StInfo>

          {/* 정보 3 */}
          <StInfo>
            <Info title='정보 3' description='정보 내용 3' />
          </StInfo>

          {/* 정보 4 */}
          <StInfo>
            <Input label='정보 4' />
          </StInfo>

          {/* 정보 5 */}
          <StInfo>
            <DatePicker title='날짜' />
          </StInfo>
        </StDetailFormBox>
        <StDetailFormButton>
          <Button>저장</Button>
        </StDetailFormButton>
      </StDetailForm>
    </StDetailContainer>
  );
}

export default DetailContent;
